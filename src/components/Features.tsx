import React, { useState } from 'react';
import { Scale, Landmark, FileCheck, Building2, Search, ShieldCheck, ArrowRight, Home, Key } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";

const Features = () => {
  const [selectedService, setSelectedService] = useState(null);

  // Services array remains the same, just updating the icon colors
  const services = [
    {
      icon: <Scale className="w-7 h-7 text-amber-300" />,
      title: "Assessoria Jurídica Imobiliária",
      description: "Especialistas em direito imobiliário para compra, venda e locação de imóveis",
      keywords: "advogado imobiliário, assessoria jurídica imobiliária",
      details: {
        fullDescription: "Nossa assessoria jurídica imobiliária oferece suporte completo em todas as etapas das transações imobiliárias. Realizamos análise minuciosa de documentos, elaboração e revisão de contratos, due diligence imobiliária e acompanhamento até o registro final do imóvel.",
        benefits: [
          "Segurança jurídica em todas as transações",
          "Análise preventiva de riscos",
          "Acompanhamento personalizado",
          "Suporte em negociações"
        ]
      }
    },
    {
      icon: <Search className="w-7 h-7 text-amber-300" />,
      title: "Análise de Documentação",
      description: "Avaliação completa da documentação do imóvel para evitar problemas futuros",
      keywords: "análise documentos imóveis, due diligence imobiliária",
      details: {
        fullDescription: "Realizamos uma análise detalhada de toda a documentação do imóvel, incluindo certidões, registros anteriores, débitos e ônus. Nossa equipe especializada identifica possíveis irregularidades e pendências que possam comprometer a segurança da transação.",
        benefits: [
          "Verificação completa de certidões",
          "Identificação de pendências",
          "Análise de regularidade fiscal",
          "Verificação de ônus e gravames"
        ]
      }
    },
    {
      icon: <Building2 className="w-7 h-7 text-amber-300" />,
      title: "Consultoria Especializada",
      description: "Consultoria jurídica para incorporadoras, construtoras e locadores",
      keywords: "consultoria jurídica imobiliária, advogado incorporação",
      details: {
        fullDescription: "Oferecemos consultoria jurídica especializada para empresas do setor imobiliário, incluindo incorporadoras, construtoras e administradoras de imóveis. Nosso trabalho abrange desde a estruturação de projetos até a resolução de questões específicas do setor.",
        benefits: [
          "Orientação estratégica",
          "Compliance imobiliário",
          "Suporte em incorporações",
          "Gestão de riscos legais"
        ]
      }
    },
    {
      icon: <FileCheck className="w-7 h-7 text-amber-300" />,
      title: "Elaboração de Contratos",
      description: "Redação e revisão de contratos de compra, venda, locação e arrendamento",
      keywords: "contratos imobiliários, elaboração contrato locação",
      details: {
        fullDescription: "Desenvolvemos e revisamos contratos imobiliários personalizados para cada tipo de transação, garantindo a proteção dos interesses de nossos clientes e a conformidade com a legislação vigente.",
        benefits: [
          "Contratos personalizados",
          "Cláusulas de proteção",
          "Revisão especializada",
          "Adequação legal"
        ]
      }
    },
    {
      icon: <Landmark className="w-7 h-7 text-amber-300" />,
      title: "Regularização de Imóveis",
      description: "Auxílio na regularização de imóveis e resolução de pendências",
      keywords: "regularização imobiliária, legalização de imóveis",
      details: {
        fullDescription: "Auxiliamos no processo de regularização de imóveis, resolvendo pendências junto aos órgãos competentes e garantindo a conformidade com as normas urbanísticas e registrais.",
        benefits: [
          "Regularização documental",
          "Resolução de pendências",
          "Adequação às normas",
          "Acompanhamento em cartórios"
        ]
      }
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-amber-300" />,
      title: "Mediação de Conflitos",
      description: "Resolução de disputas imobiliárias e conflitos entre locadores e locatários",
      keywords: "mediação imobiliária, resolução conflitos locação",
      details: {
        fullDescription: "Atuamos na mediação e resolução de conflitos imobiliários, buscando soluções eficientes e satisfatórias para todas as partes envolvidas, evitando longos processos judiciais.",
        benefits: [
          "Mediação especializada",
          "Resolução extrajudicial",
          "Acordos consensuais",
          "Economia processual"
        ]
      }
    },
    {
      icon: <Home className="w-7 h-7 text-amber-300" />,
      title: "Gestão de Locações",
      description: "Assessoria completa em contratos de locação, desde a elaboração até a execução",
      keywords: "gestão de locações, contratos de aluguel",
      details: {
        fullDescription: "Oferecemos suporte completo na gestão de locações, desde a elaboração do contrato até o acompanhamento da execução, garantindo segurança jurídica para locadores e locatários.",
        benefits: [
          "Gestão contratual completa",
          "Suporte na execução",
          "Proteção das partes",
          "Acompanhamento periódico"
        ]
      }
    },
    {
      icon: <Key className="w-7 h-7 text-amber-300" />,
      title: "Leilão de Imóveis",
      description: "Orientação jurídica para participação em leilões imobiliários e regularização pós-leilão",
      keywords: "leilão de imóveis, assessoria jurídica leilões",
      details: {
        fullDescription: "Prestamos assessoria completa para participação em leilões imobiliários, desde a análise do edital até a regularização do imóvel após a arrematação, garantindo segurança em todo o processo.",
        benefits: [
          "Análise de editais",
          "Assessoria na arrematação",
          "Regularização pós-leilão",
          "Due diligence específica"
        ]
      }
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Image with Overlay */}
      
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] bg-slate-800/30 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] bg-slate-800/30 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-radial from-amber-300/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <h1 className="text-4xl font-bold text-white mb-6">
            Assessoria Jurídica Imobiliária{" "}
            <span className="text-amber-300">Especializada</span>
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
            Proteja seu investimento imobiliário com nossa expertise legal
          </p>
          
        </div>
        
        {/* Main Services */}
        <div className="grid md:grid-cols-3 gap-3 mb-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group p-3 bg-black/40 backdrop-blur-sm border border-white/10 hover:border-amber-300/30 transition-all duration-300 overflow-hidden rounded-md transform hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                <div className="w-8 h-8 rounded-md bg-amber-300/5 flex items-center justify-center mb-3 group-hover:bg-amber-300/20 transition-colors duration-300 transform group-hover:scale-110">
                  {service.icon}
                </div>
                <h2 className="text-base font-semibold text-white mb-1 group-hover:text-amber-200 transition-colors duration-300">
                  {service.title}
                </h2>
                <p className="text-white/70 text-xs mb-3 flex-grow group-hover:text-white/90 transition-colors duration-300">
                  {service.description}
                </p>
                <button 
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center text-amber-300 text-xs font-medium transition-all duration-300 group-hover:translate-x-1"
                >
                  Saiba mais
                  <ArrowRight className="ml-1 w-2 h-2 group-hover:ml-1.5 transition-all duration-300" />
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Service Details Modal */}
        <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
          <DialogContent className="bg-slate-900/95 border-amber-300/20 text-white max-w-2xl">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3 text-xl font-bold text-amber-300">
                {selectedService?.icon}
                {selectedService?.title}
              </DialogTitle>
              <DialogDescription className="text-white/80">
                <div className="mt-4 space-y-4">
                  <p className="text-lg">{selectedService?.details?.fullDescription}</p>
                  
                  <div className="mt-6">
                    <h4 className="text-amber-300 font-semibold mb-3">Benefícios:</h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {selectedService?.details?.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <ArrowRight className="w-4 h-4 text-amber-300" />
                          <span className="text-white/80">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Contact Buttons */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <a 
                      href={`https://wa.me/5500000000000?text=Olá! Gostaria de saber mais sobre ${selectedService?.title}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative px-6 py-3 bg-amber-300 hover:bg-amber-400 text-slate-900 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      </svg>
                      Falar com Advogado
                    </a>
                    <button 
                      onClick={() => window.location.href = '/contato'}
                      className="px-6 py-3 bg-black/40 text-amber-300 font-semibold rounded-lg border border-amber-300/30 hover:bg-amber-300/10 transition-colors flex items-center justify-center gap-2"
                    >
                      <ArrowRight className="w-5 h-5" />
                      Agendar Consultoria
                    </button>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

        {/* Final CTA */}
        <div className="relative mt-12">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/95 to-slate-900/90 rounded-lg blur-xl"></div>
          <Card className="relative p-6 md:p-8 bg-black/40 backdrop-blur-sm border border-white/10 hover:border-amber-300/30 transition-all duration-300 overflow-hidden rounded-lg">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
            <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-amber-300 to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-amber-300 to-transparent"></div>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                  Precisa de assessoria jurídica especializada?
                </h3>
                <p className="text-base text-white/70">
                  Agende uma consulta e descubra como podemos proteger seu investimento imobiliário
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-end">
                <button className="px-4 py-2 bg-amber-300 hover:bg-amber-400 text-slate-900 font-semibold rounded-md transition-all duration-300 text-sm">
                  WhatsApp Direto
                </button>
                <button className="px-4 py-2 bg-black/40 text-amber-300 font-semibold rounded-md border border-amber-300/30 hover:bg-amber-300/10 transition-colors text-sm">
                  Agendar Consultoria
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;