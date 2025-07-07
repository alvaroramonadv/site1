import { Facebook, Instagram, MapPin, Phone, Mail, ChevronRight, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";


const Footer = () => {
  const areas = [
    "Direito Imobiliário",
    "Direito Civil", 
    "Direito Administrativo",
    "Direito Penal"
  ];

  return (
    <footer className="relative py-16 overflow-hidden bg-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-1/2 -right-1/2 w-[800px] h-[800px] bg-slate-900/40 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-1/2 -left-1/2 w-[800px] h-[800px] bg-slate-900/40 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1 space-y-6">
            
            <p className="text-sm text-white/70 leading-relaxed">
              Comprometidos com a excelência jurídica e a defesa dos seus direitos. Nossa expertise em direito imobiliário garante soluções eficientes.
            </p>
            <div className="flex items-center space-x-1">
              <Button 
                variant="ghost" 
                size="icon"
                className="rounded-full text-[#FEB101] hover:text-slate-900 hover:bg-[#FEB101] transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="rounded-full text-[#FEB101] hover:text-slate-900 hover:bg-[#FEB101] transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="rounded-full text-[#FEB101] hover:text-slate-900 hover:bg-[#FEB101] transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                </svg>
              </Button>
            </div>
          </div>

          {/* Areas column */}
          <div className="lg:col-span-1">
            <h4 className="text-base font-medium text-white mb-4">Áreas de Atuação</h4>
            <ul className="space-y-2">
              {areas.map((area, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="group flex items-center text-sm text-white/70 hover:text-[#FEB101] transition-colors duration-300"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 text-[#FEB101]/30 group-hover:text-[#FEB101] transition-colors" />
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-base font-medium text-white mb-4">Contato</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#FEB101] mt-1 flex-shrink-0" />
                  <span className="text-sm text-white/70">
                    Av. Desembargador Moreira, 1300. Torre Norte, Sala 321. Aldeota - Fortaleza-CE
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[#FEB101]" />
                  <span className="text-sm text-white/70">+55 (85) 9 9999-9999</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[#FEB101]" />
                  <span className="text-sm text-white/70">contato@nunesadvogados.adv.br</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-base font-medium text-white mb-4">Newsletter</h4>
              <p className="text-sm text-white/70 mb-3">
                Receba novidades sobre direito imobiliário
              </p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Seu e-mail"
                  className="flex-1 bg-black/40 backdrop-blur-sm border border-white/10 hover:border-[#FEB101]/30 rounded-lg px-3 py-1.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#FEB101]/50 transition-all duration-300"
                />
                <Button 
                  className="bg-[#FEB101] hover:bg-[#FEB101]/80 text-slate-900 rounded-lg px-3 py-1.5 shadow-lg hover:shadow-[#FEB101]/20 transition-all duration-300"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-xs text-white/60">
              © 2025 Nunes Advogados. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 md:justify-end text-xs">
              <a href="#" className="text-white/60 hover:text-[#FEB101] transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/60 hover:text-[#FEB101] transition-colors duration-300">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Golden detail at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#FEB101]/0 via-[#FEB101]/50 to-[#FEB101]/0"></div>
    </footer>
  );
};

export default Footer;