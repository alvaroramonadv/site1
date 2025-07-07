import { Card } from "@/components/ui/card";
import { Quote, Star, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      quote: "A equipe jurídica foi fundamental na suspensão do leilão do meu imóvel. Sua atuação rápida e conhecimento profundo das leis salvaram minha propriedade.",
      author: "Carlos Silva",
      role: "Proprietário",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      company: "Residencial Vila Verde"
    },
    {
      quote: "Graças à intervenção legal desta equipe, conseguimos suspender o leilão de diversos imóveis em nossa incorporação. Profissionalismo e eficiência excepcionais.",
      author: "Maria Santos",
      role: "Diretora de Incorporação",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      company: "MS Empreendimentos"
    },
    {
      quote: "A assessoria jurídica foi crucial para evitar o leilão do meu imóvel comercial. Eles encontraram brechas legais que eu nem sabia que existiam.",
      author: "Pedro Oliveira",
      role: "Empresário",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      company: "Oliveira Comércio Ltda."
    },
    {
      quote: "A equipe demonstrou um conhecimento impressionante sobre leis de execução e leilões. Sua estratégia legal foi decisiva para suspender o leilão de nossos ativos.",
      author: "Ana Rodrigues",
      role: "CFO",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      company: "AR Construtora"
    },
    {
      quote: "Quando achei que perderia minha casa em um leilão, esta equipe jurídica entrou em ação. Sua expertise em negociação com credores foi fundamental para manter meu lar.",
      author: "Roberto Lima",
      role: "Engenheiro",
      rating: 5,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      company: "Lima Projetos"
    },
    {
      quote: "A suspensão do leilão de nossos imóveis corporativos foi um processo complexo, mas esta equipe o tornou compreensível e gerenciável. Resultado excepcional.",
      author: "Fernanda Costa",
      role: "Diretora Executiva",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
      company: "FC Corporativo"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev + 2 >= testimonials.length ? 0 : prev + 2
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev - 2 < 0 ? testimonials.length - 2 : prev - 2
    );
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Casos de{" "}
            <span className="text-[#FFB300] underline decoration-2 underline-offset-4">
              Suspensão
            </span>
          </h2>
          <p className="text-lg text-black/80 max-w-2xl mx-auto">
            Veja como ajudamos nossos clientes a suspender leilões e proteger seus imóveis da execução
          </p>
        </div>
 
        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / 2)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full md:w-1/2 flex-shrink-0 px-2">
                  <Card className="group bg-white border border-slate-200 hover:border-amber-200 hover:shadow-lg transition-all duration-300 rounded-lg">
                    <div className="p-4">
                      <div className="flex mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-[#FFB300] fill-[#FFB300]" />
                        ))}
                      </div>
 
                      <Quote className="w-6 h-6 text-[#FFB300]/20 mb-3" />
                      <p className="text-black/80 text-sm mb-4">"{testimonial.quote}"</p>
 
                      <div className="flex items-center gap-3 pt-3 border-t border-slate-200">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full object-cover border-2 border-amber-200"
                        />
                        <div>
                          <div className="text-black font-semibold text-sm">{testimonial.author}</div>
                          <div className="text-[#FFB300] text-xs mb-1">{testimonial.role}</div>
                          <div className="text-black/40 text-xs">{testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
 
          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-amber-50 text-black p-2 rounded-full transition-all shadow-md hover:shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-amber-50 text-black p-2 rounded-full transition-all shadow-md hover:shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index * 2)}
                className={`h-3 rounded-full transition-all ${
                  currentSlide === index * 2 
                    ? "bg-black w-8" 
                    : "bg-gray-300 hover:bg-gray-600 w-3"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
 };
 
 export default Testimonials;