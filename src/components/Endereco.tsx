import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

const Address = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-amber-300" />,
      title: "Endereço",
      description: "Av. Desembargador Moreira, 1300",
      details: "Fortaleza-CE",
    },
    {
      icon: <Phone className="w-5 h-5 text-amber-300" />,
      title: "Telefone",
      description: "+55 (11) 3000-0000",
      details: "+55 (11) 99999-9999",
    },
    {
      icon: <Mail className="w-5 h-5 text-amber-300" />,
      title: "E-mail",
      description: "contato@nunesadvogados.adv.br",
      details: "comercial@advocaciasilva.com.br",
    },
    {
      icon: <Clock className="w-5 h-5 text-amber-300" />,
      title: "Horário",
      description: "Segunda à Sexta: 09h às 18h",
      details: "Sábado: 09h às 13h",
    },
  ];

  return (
    <section className="py-12 relative overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">
            Onde Nos <span className="text-amber-300">Encontrar</span>
          </h2>
          <p className="text-base text-white/80 max-w-xl mx-auto">
            Visite nosso escritório ou entre em contato
          </p>
        </div>
        
        <div className="grid lg:grid-cols-5 gap-4">
          {/* Contact Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 gap-4">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-black/40 border border-white/10 hover:border-amber-300/30 transition-all duration-300">
                <div className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-amber-300/10 flex items-center justify-center">
                      {info.icon}
                    </div>
                    <h3 className="text-sm font-medium text-white">
                      {info.title}
                    </h3>
                  </div>
                  <div className="space-y-1">
                    <p className="text-white/80 text-xs">{info.description}</p>
                    <p className="text-white/60 text-xs">{info.details}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Map */}
          <div className="lg:col-span-3">
            <Card className="bg-black/40 border border-white/10 hover:border-amber-300/30 transition-all duration-300 h-full">
              <div className="absolute top-2 right-2 z-10">
                
              </div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3307367211395!2d-38.49247632426694!3d-3.742911343663286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74991204f2639%3A0x5c802f0ef9f25d6e!2sAv.%20Des.%20Moreira%2C%201300%20-%20Aldeota%2C%20Fortaleza%20-%20CE%2C%2060170-002!5e0!3m2!1spt-BR!2sbr!4v1709420789012!5m2!1spt-BR!2sbr"
                className="w-full h-full min-h-[400px] rounded-lg"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Address;