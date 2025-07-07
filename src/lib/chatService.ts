import openai from './openai';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_ANON_KEY!
);

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const SYSTEM_PROMPT = `Você é um assistente virtual especializado em atendimento jurídico para um escritório de advocacia.
Suas principais funções são:
1. Responder dúvidas básicas sobre serviços jurídicos
2. Agendar consultas
3. Coletar informações de contato dos clientes
4. Explicar os processos do escritório

Mantenha um tom profissional mas acolhedor. Se perceber que a dúvida é muito técnica ou complexa, 
sugira agendar uma consulta com um advogado. Para agendar consultas, colete: nome, telefone, 
email e assunto principal.`;

export const processChatMessage = async (
  message: string,
  conversationHistory: ChatMessage[]
) => {
  try {
    // Preparar o histórico de conversa para a API
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...conversationHistory,
      { role: 'user', content: message }
    ];

    // Fazer a chamada para a OpenAI
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages as any,
      temperature: 0.7,
      max_tokens: 500
    });

    const aiResponse = completion.choices[0].message?.content || '';

    // Salvar no histórico
    await supabase.from('chat_history').insert([
      {
        user_message: message,
        ai_response: aiResponse,
      }
    ]);

    // Verificar se é uma solicitação de agendamento
    if (aiResponse.toLowerCase().includes('agendar') || 
        message.toLowerCase().includes('agendar')) {
      // Extrair informações de contato se disponíveis
      const nameMatch = message.match(/nome[: ]+([\w\s]+)/i);
      const phoneMatch = message.match(/(?:telefone|celular)[: ]+([0-9\s-+()]+)/i);
      const emailMatch = message.match(/email[: ]+([^\s]+@[^\s]+)/i);
      
      if (nameMatch || phoneMatch || emailMatch) {
        await supabase.from('client_leads').insert([
          {
            name: nameMatch ? nameMatch[1].trim() : null,
            phone: phoneMatch ? phoneMatch[1].trim() : null,
            email: emailMatch ? emailMatch[1].trim() : null,
            subject: 'Consulta via Chat',
            message: message,
          }
        ]);
      }
    }

    return aiResponse;

  } catch (error) {
    console.error('Error processing message:', error);
    throw error;
  }
};

export const scheduleConsultation = async (
  name: string,
  phone: string,
  email: string,
  subject: string,
  preferredDate?: string
) => {
  try {
    const { data, error } = await supabase
      .from('client_leads')
      .insert([
        {
          name,
          phone,
          email,
          subject,
          consultation_date: preferredDate,
          status: 'new'
        }
      ])
      .select();

    if (error) throw error;

    // Aqui você pode adicionar a integração com o WhatsApp
    // Exemplo de mensagem para o advogado:
    const message = `
      Nova solicitação de consulta:
      Nome: ${name}
      Telefone: ${phone}
      Email: ${email}
      Assunto: ${subject}
      Data preferida: ${preferredDate || 'Não especificada'}
    `;

    // TODO: Implementar envio via WhatsApp

    return data;
  } catch (error) {
    console.error('Error scheduling consultation:', error);
    throw error;
  }
};