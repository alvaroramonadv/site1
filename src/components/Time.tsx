import React from 'react';
import { Card } from "@/components/ui/card";
import { LinkedinIcon, ArrowUpRight, MessageSquare, Instagram } from "lucide-react";

const Team = () => {
  const team = [
    {
      name: "Dr. Álvaro Ramon",
      role: "Advogado Sênior - Direito Criminal",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      oab: "OAB/CE 12.345",
      description: "Especialista em Direito Criminal com mais de 15 anos de experiência. Pós-graduado em Direito Penal pela Unifor e membro da Comissão de Direito Criminal da OAB/CE.",
      expertise: [
        "Defesa Criminal",
        "Crimes Financeiros",
        "Tribunal do Júri",
        "Habeas Corpus"
      ],
      instagram: "https://instagram.com"
    },
    {
      name: "Dr. Edmar Nunes",
      role: "Advogado - Contratos Imobiliários",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      oab: "OAB/CE 23.456",
      description: "Especialista em Direito Imobiliário com vasta experiência em transações complexas. Mestre em Direito Civil pela UFCE, atua como consultora jurídica para incorporadoras e ministra aulas em programas de pós-graduação.",
      expertise: [
        "Contratos de Compra e Venda",
        "Locação Comercial",
        "Direito Notarial",
        "Consultoria Preventiva"
      ],
      instagram: "https://instagram.com/edmarneto"
    },
    {
      name: "Dr. João Silva",
      role: "Advogado - Direito Civil",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
      oab: "OAB/CE 34.567",
      description: "Especialista em Direito Civil com 10 anos de experiência. Graduado em Direito pela UFCE, atua como consultor jurídico para empresas e particulares.", 
      expertise: [
        "Contratos de Compra e Venda",
        "Locação Comercial",
        "Direito Notarial",
        "Consultoria Preventiva"
      ],
      instagram: "https://instagram.com"      
    },
      
    
  ];

  return (
    <section className="py-12 relative overflow-hidden">
      {/* Background and overlays */}
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Nossa <span className="text-[#FEB101] underline decoration-2 ">Equipe</span> Jurídica
          </h2>
          <p className="text-base text-white/90 max-w-xl mx-auto">
            Profissionais especializados e comprometidos com a excelência jurídica
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <Card 
              key={index} 
              className="group bg-black/40 border border-white/10 hover:border-[#FEB101]/30 transition-all duration-300 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-500 filter grayscale group-hover:filter-none"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <h3 className="text-white font-semibold text-lg">{member.name}</h3>
                  <p className="text-[#FEB101] text-sm mt-1">{member.oab}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h4 className="text-white/90 text-sm font-medium mb-2 text-justify">{member.role}</h4>
                <p className="text-white/70 text-sm mb-4 text-justify">{member.description}</p>
                
                {/* Expertise */}
                <div className="space-y-2 mb-4">
                  {member.expertise.map((item, i) => (
                    <div key={i} className="flex items-center text-xs">
                      <div className="w-1 h-1 bg-[#FEB101] rounded-full mr-2"></div>
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <a 
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#FEB101] hover:text-[#FEB101]/80 text-sm transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Seguir</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <a 
                    href={`https://wa.me/${member.whatsapp}?text=Olá ${member.name}, gostaria de agendar uma consultoria.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#FEB101] hover:text-[#FEB101]/80 text-sm transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="mt-12 p-6 bg-black/40 border border-[#FEB101]/30 hover:border-[#FEB101]/50 transition-all duration-300">
          <div className="text-center">
            <h3 className="text-white text-lg font-semibold mb-2">
              Precisa de assessoria jurídica?
            </h3>
            <p className="text-white/70 text-sm mb-4">
              Nossa equipe está pronta para auxiliar você em questões imobiliárias
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-[#FEB101] hover:bg-[#FEB101]/80 text-slate-900 text-sm font-medium rounded-md transition-colors inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                Falar com um Advogado
              </a>
            </div>
          </div>
        </Card>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FEB101]/30 to-transparent"></div>
    </section>
  );
};

export default Team;