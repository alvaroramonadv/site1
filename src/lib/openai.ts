import OpenAI from 'openai';

// Inicialização do cliente OpenAI
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

// Prompt do sistema que define o comportamento do assistente
export const SYSTEM_PROMPT = `Você é um assistente virtual especializado em atendimento jurídico para um escritório de advocacia.
Suas principais funções são:

1. Responder dúvidas básicas sobre serviços jurídicos na área imobiliária
2. Agendar consultas com os advogados
3. Coletar informações de contato dos clientes
4. Explicar processos e procedimentos do escritório

Diretrizes:
- Mantenha um tom profissional, mas acolhedor
- Para dúvidas técnicas ou complexas, sugira agendar uma consulta
- Ao agendar consultas, colete: nome, telefone, email e assunto
- Foque em direito imobiliário e questões relacionadas
- Evite dar conselhos jurídicos específicos
- Seja sucinto e claro nas respostas

Serviços do escritório:
- Assessoria em compra e venda de imóveis
- Análise de documentação imobiliária
- Contratos de locação
- Regularização de imóveis
- Consultoria em incorporações
- Resolução de conflitos imobiliários`;

// Função para processar mensagens com a OpenAI
export const processMessage = async (message: string, conversationHistory: any[] = []) => {
    if (!import.meta.env.VITE_OPENAI_API_KEY) {
      throw new Error('OpenAI API key is required');
    }
  
    try {
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          { role: 'system', content: SYSTEM_PROMPT },
          ...conversationHistory,
          { role: 'user', content: message }
        ],
        temperature: 0.7,
        max_tokens: 500
      });
  
      return completion.choices[0].message?.content || 'Desculpe, não consegui processar sua mensagem.';
    } catch (error) {
      console.error('Error processing OpenAI message:', error);
      throw error;
    }
  };
  
  export default openai;