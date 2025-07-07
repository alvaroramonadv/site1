import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    // Hero Section
    <section id="Hero" className="min-h-[90vh] flex items-center justify-center relative overflow-hidden bg-black bg-opacity-70">
      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24 text-center">
        <div className="space-y-5 sm:space-y-6 lg:space-y-8">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Seu imóvel está em risco de{" "}
            <span className="text-[#FFB300] underline decoration-2 underline-offset-4 font-extrabold">leilão?</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-white font-medium max-w-3xl mx-auto leading-relaxed">
            Não perca seu patrimônio! Nossos advogados especializados podem suspender o leilão e proteger seu imóvel imediatamente.
          </p>
          
          {/* CTA Button */}
          <div className="pt-5 sm:pt-6">
            <Button 
              className="px-6 py-3 sm:px-8 sm:py-4 bg-[#25D366] hover:bg-[#128C7E] text-white text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 flex items-center gap-2 sm:gap-3 mx-auto group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Fale conosco no WhatsApp
              {/* WhatsApp Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6 transition-all group-hover:rotate-12 group-hover:scale-110">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      {/* Bottom Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#FCD34D] to-transparent opacity-30 animate-pulse"></div>
      
      {/* Top Right Gradient Blob */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 max-w-[30vw] max-h-[30vw] bg-gradient-to-br from-amber-100/10 to-amber-200/10 rounded-full blur-[60px] sm:blur-[120px] -translate-y-1/4 translate-x-1/4 animate-pulse"></div>
      
      {/* Bottom Left Gradient Blob */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 max-w-[30vw] max-h-[30vw] bg-gradient-to-tl from-amber-100/10 to-amber-200/10 rounded-full blur-[60px] sm:blur-[120px] translate-y-1/4 -translate-x-1/4 animate-pulse"></div>
      
      {/* Center Gradient Blob */}
      <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 max-w-[25vw] max-h-[25vw] bg-gradient-to-r from-amber-100/5 to-amber-200/5 rounded-full blur-[50px] sm:blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Prédios modernos" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-black opacity-20"></div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-4 h-7 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-1 h-1 bg-amber-400 rounded-full animate-bounce"></div>
        </div>
        <ChevronDown className="h-3 w-3 text-white animate-bounce" />
      </div>
    </section>
  );

};

export default Hero;