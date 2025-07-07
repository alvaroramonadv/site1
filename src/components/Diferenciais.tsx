import { Scale, Users, Trophy, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

const Differentials = () => {
 const differentials = [
   {
     icon: <Scale className="w-6 h-6 text-[#FFB300]" />,
     title: "Experiência Comprovada", 
     description: "15 anos de atuação exclusiva no mercado imobiliário",
     stats: "+500 casos bem-sucedidos"
   },
   {
     icon: <Users className="w-6 h-6 text-[#FFB300]" />,
     title: "Equipe Especializada",
     description: "Advogados com especialização em direito imobiliário",
     stats: "12 profissionais dedicados"  
   },
   {
     icon: <Trophy className="w-6 h-6 text-[#FFB300]" />,
     title: "Reconhecimento",
     description: "Top 3 em rankings do setor imobiliário",
     stats: "5 prêmios de excelência"
   },
   {
     icon: <Clock className="w-6 h-6 text-[#FFB300]" />, 
     title: "Atendimento Ágil",
     description: "Resposta em até 24 horas úteis",
     stats: "97% de satisfação dos clientes"
   }
 ];

 return (
   <section id="Diferenciais" className="py-12 bg-white">
     <div className="max-w-6xl mx-auto px-4">
       {/* Header */}
       <div className="text-center mb-16">
         <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
           Expertise e <span className="text-[#FEB101] underline decoration-2 underline-offset-8">Dedicação</span>
         </h2>
         <p className="text-lg md:text-xl text-black/80 max-w-3xl mx-auto leading-relaxed">
           Nosso compromisso é oferecer soluções jurídicas eficientes para proteger seu patrimônio
         </p>
       </div>

       {/* Differentials Grid */}
       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
         {differentials.map((differential, index) => (
           <Card 
             key={index}
             className="bg-white border border-slate-200 hover:border-amber-200 hover:shadow-lg transition-all duration-300 group"
           >
             <div className="p-6">
               <div className="flex flex-col items-center text-center">
                 <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
                   {differential.icon}
                 </div>
                 <h3 className="text-black font-medium mb-2">
                   {differential.title}
                 </h3>
                 <p className="text-black/60 text-sm mb-4">
                   {differential.description}
                 </p>
                 <div className="text-[#FFB300] text-sm font-semibold">
                   {differential.stats}
                 </div>
               </div>
             </div>
           </Card>
         ))}
       </div>

       {/* Stats Section */}
       <div className="mt-12 grid md:grid-cols-3 gap-6">
         <Card className="bg-gradient-to-br from-[#FFB300] to-amber-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
           <div className="flex flex-col items-center">
             <div className="text-4xl font-extrabold mb-2">+1500</div>
             <p className="text-sm uppercase tracking-wider text-white/90">Clientes Atendidos</p>
           </div>
         </Card>
         
         <Card className="bg-gradient-to-br from-[#FFB300] to-amber-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
           <div className="flex flex-col items-center">
             <div className="text-4xl font-extrabold mb-2">98%</div>
             <p className="text-sm uppercase tracking-wider text-white/90">Taxa de Sucesso</p>
           </div>
         </Card>

         <Card className="bg-gradient-to-br from-[#FFB300] to-amber-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
           <div className="flex flex-col items-center">
             <div className="text-4xl font-extrabold mb-2">15 Anos</div>
             <p className="text-sm uppercase tracking-wider text-white/90">De Experiência</p>
           </div>
         </Card>
       </div>
     </div>
   </section>
 );
};

export default Differentials;