import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      question: "Como posso suspender o leilão do meu imóvel? Há alguma solução jurídica?",
      answer: "A suspensão de um leilão imobiliário é possível e nossos advogados especializados podem ajudar. Agimos rapidamente para analisar sua situação, identificar irregularidades no processo e entrar com medidas judiciais para interromper o leilão. Já conseguimos suspender diversos leilões, protegendo o patrimônio de nossos clientes. Não espere até ser tarde demais, entre em contato conosco imediatamente para avaliarmos seu caso."
    },
    {
      question: "Quais são meus direitos se meu imóvel estiver em processo de leilão?",
      answer: "Você tem mais direitos do que imagina! Mesmo em processo de leilão, existem diversas formas de proteger seu imóvel. Podemos questionar a dívida, negociar com o credor, ou até mesmo anular o processo por irregularidades. Nossos advogados são especialistas em encontrar brechas legais para defender seu patrimônio. Não desista sem lutar - com a estratégia certa, muitos de nossos clientes conseguiram manter seus imóveis."
    },
    {
      question: "É possível renegociar a dívida mesmo com o leilão já marcado?",
      answer: "Absolutamente! Nunca é tarde para uma renegociação, mesmo com o leilão agendado. Nossos advogados são habilidosos negociadores e podem intermediar um acordo com o credor. Já conseguimos cancelar leilões no último minuto através de renegociações bem-sucedidas. Não deixe o medo paralisar você - com nossa ajuda, é possível reverter a situação e manter seu imóvel."
    },
    {
      question: "Quanto tempo tenho para agir e evitar o leilão do meu imóvel?",
      answer: "O tempo é crucial, mas com ação rápida, podemos fazer milagres! Mesmo faltando poucos dias para o leilão, ainda há esperança. Nossa equipe trabalha com urgência em casos como o seu. Já conseguimos suspender leilões com menos de 24 horas de antecedência. Não espere mais - cada minuto conta. Entre em contato agora e daremos prioridade máxima ao seu caso para proteger seu imóvel."
    },
    {
      question: "Quais as chances de sucesso em suspender um leilão imobiliário?",
      answer: "As chances são surpreendentemente boas com a estratégia correta! Nossa taxa de sucesso em suspender leilões é superior a 80%. Utilizamos uma combinação de conhecimento jurídico profundo, estratégias inovadoras e atuação agressiva para proteger os interesses de nossos clientes. Não se resigne a perder seu imóvel - com nossa experiência ao seu lado, as probabilidades estão a seu favor. Vamos lutar juntos pelo seu patrimônio!"
    }    
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')`
        }}
      />
      <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] bg-slate-900/40 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] bg-slate-900/40 rounded-full blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            Dúvidas{" "}
            <span className="text-[#FEB101]">Frequentes</span>
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Encontre respostas para as principais dúvidas sobre{" "}
            <span className="text-[#FEB101] font-semibold">assessoria jurídica imobiliária</span>
          </p>
        </div>
        
        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`bg-black/40 backdrop-blur-sm border rounded-lg overflow-hidden transition-all duration-300 group ${
                openQuestion === index
                  ? 'border-[#FEB101]/50 shadow-lg shadow-[#FEB101]/20'
                  : 'border-white/10 hover:border-[#FEB101]/30'
              }`}
            >
              <button
                onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className={`font-medium pr-4 transition-colors duration-300 ${
                  openQuestion === index ? 'text-[#FEB101]' : 'text-white group-hover:text-[#FEB101]'
                }`}>
                  {faq.question}
                </span>
                {openQuestion === index ? (
                  <Minus className="w-5 h-5 text-[#FEB101] flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-[#FEB101] flex-shrink-0" />
                )}
              </button>
              
              {openQuestion === index && (
                <div className="px-6 pb-4 text-white/70 leading-relaxed text-justify">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-white/90 mb-6">
            Ainda tem dúvidas? Entre em contato conosco
          </p>
          <a 
            href="https://wa.me/5500000000000?text=Olá! Tenho algumas dúvidas sobre assessoria jurídica imobiliária" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#FEB101] hover:bg-[#FEB101]/80 text-slate-900 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-[#FEB101]/20"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            </svg>
            Falar com Especialista
          </a>
        </div>
      </div>
      {/* Golden detail at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#FEB101]/0 via-[#FEB101]/50 to-[#FEB101]/0"></div>
    </section>
  );
};

export default FAQ;