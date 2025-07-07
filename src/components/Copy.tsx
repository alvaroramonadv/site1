import React from 'react';
import { ArrowRight, CheckCircle2, Scale, FileCheck, Building2, Search, ShieldCheck, Clock, Gavel } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Progress } from '@radix-ui/react-progress';

const CopySection = () => {
  const features = [
    {
      icon: <Gavel className="w-6 h-6 text-[#FFB300]" />,
      title: "Análise Jurídica Especializada",
      description: "Avaliação minuciosa do processo de leilão, identificando irregularidades e fundamentando juridicamente a suspensão."
    },
    {
      icon: <Clock className="w-6 h-6 text-[#FFB300]" />,
      title: "Atuação Rápida e Eficiente",
      description: "Agimos com urgência para interromper o leilão, protegendo seu imóvel antes que seja tarde demais."
    },
    {
      icon: <FileCheck className="w-6 h-6 text-[#FFB300]" />,
      title: "Estratégias Personalizadas",
      description: "Desenvolvemos argumentos jurídicos sob medida para cada caso, maximizando as chances de sucesso na suspensão do leilão."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#FFB300]" />,
      title: "Proteção Patrimonial Integral",
      description: "Não apenas suspendemos o leilão, mas também implementamos medidas para evitar futuras ameaças ao seu imóvel."
    }
  ];

  const stats = [
    { icon: <Clock className="w-6 h-6 text-[#FFB300]" />, number: "98%", label: "Taxa de Sucesso em Suspensões de Leilão" },
    { icon: <CheckCircle2 className="w-6 h-6 text-[#FFB300]" />, number: "24h", label: "Tempo Médio de Resposta em Casos Urgentes" }
  ];

  return (
    <section id="Copy" className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-8 leading-tight">
              Seu imóvel está em risco de leilão?{" "}
              <span className="text-[#FFB300] underline decoration-2 underline-offset-4">Aja agora para evitar a perda!</span>
            </h1>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                A cada ano, <span className="text-[#FFB300] font-bold">milhares de proprietários perdem seus imóveis</span> em leilões judiciais, muitas vezes por desconhecerem seus direitos ou não agirem a tempo.
              </p>

              <p className="text-lg leading-relaxed">
                Não deixe que seu patrimônio seja leiloado. Com a assessoria jurídica correta, é possível <span className="text-[#FFB300] font-bold">suspender o leilão e proteger seu imóvel</span>.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg border border-amber-200 shadow-md">
              <h3 className="text-2xl font-bold text-amber-800 mb-4">Por que agir imediatamente?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-amber-700 mr-2 flex-shrink-0" />
                  <span className="text-gray-800">O tempo é crucial: quanto antes agir, maiores as chances de sucesso</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-amber-700 mr-2 flex-shrink-0" />
                  <span className="text-gray-800">Evite perdas financeiras significativas e traumas emocionais</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-amber-700 mr-2 flex-shrink-0" />
                  <span className="text-gray-800">Garanta seu direito de defesa e contestação</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-amber-700 mr-2 flex-shrink-0" />
                  <span className="text-gray-800">Proteja o lar da sua família e seu investimento</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-white shadow-sm border border-gray-200 hover:border-amber-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="flex-1 p-6 bg-white shadow-sm border border-gray-200 hover:border-amber-200 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 bg-amber-50 rounded-full group-hover:bg-amber-100 transition-colors">
                  {stat.icon}
                </div>
                <div className="flex-1">
                  <span className="block text-4xl font-bold text-[#FFB300]">{stat.number}</span>
                  <span className="text-sm text-gray-600">{stat.label}</span>
                  <Progress value={parseInt(stat.number)} className="mt-3" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="relative mt-12">
          <Card className="relative p-8 bg-white shadow-md border border-black rounded-xl">
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <div>
                <div className="flex items-center mb-3">
                  <Gavel className="text-amber-500 mr-2 h-6 w-6" />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    Não espere o martelo bater! Aja agora!
                  </h3>
                </div>
                <p className="text-base text-gray-600">
                  Consulte nossos especialistas e descubra como podemos suspender o leilão do seu imóvel
                </p>
              </div>
              <div className="flex justify-end">
                <button className="px-4 py-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-md transition-all duration-300 text-sm">
                  Fale Conosco Agora
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CopySection;