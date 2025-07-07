import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const LeadForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    area: "",
    caso_juridico: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      area: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone,
        caso_juridico: `Área: ${formData.area}\n\nDescrição do caso:\n${formData.caso_juridico}`
      };

      const response = await fetch('https:', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      toast({
        title: "Solicitação enviada com sucesso!",
        description: "Em breve nossa equipe entrará em contato para uma análise preliminar.",
      });

      setFormData({
        nome: "",
        email: "",
        telefone: "",
        area: "",
        caso_juridico: ""
      });
    } catch (error) {
      console.error('Erro ao enviar:', error);
      
      toast({
        title: "Erro ao enviar solicitação",
        description: "Por favor, tente novamente ou entre em contato conosco diretamente.",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Análise <span className="text-amber-500 relative">
              Preliminar
              <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 138 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7.82959C36.2857 2.83679 70.9524 2.34248 137 7.34248" stroke="#FFB300" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tem dúvidas sobre seu caso específico? Informe os detalhes e receba uma análise inicial por <span className="font-semibold text-amber-600">e-mail</span> em menos de 2 minutos
          </p>
        </div>

    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-xl">
      <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 mb-6">
        <p className="text-sm text-gray-700">
          Esta análise é para dúvidas rápidas e <strong>não constitui consulta jurídica formal</strong>. 
          <span className="font-semibold text-amber-600"> Para orientações detalhadas, consulte um advogado.</span>
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
          <Input
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            className="w-full bg-gray-50 border-gray-200 focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50 rounded-md text-black"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-gray-50 border-gray-200 focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50 rounded-md text-black"
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">WhatsApp</label>
          <Input
            id="telefone"
            name="telefone"
            type="tel"
            value={formData.telefone}
            onChange={handleChange}
            required
            pattern="[0-9]*"
            className="w-full bg-gray-50 border-gray-200 focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50 rounded-md text-black"
          />
        </div>
        
        <div>
          <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">Área jurídica</label>
          <Select 
            required
            value={formData.area}
            onValueChange={handleSelectChange}
          >
            <SelectTrigger id="area" className="w-full bg-gray-50 border-gray-200 focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50 rounded-md text-black">
              <SelectValue placeholder="Selecione a área" />
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 rounded-md shadow-lg">
              <SelectItem value="civil" className="py-2 px-4 hover:bg-amber-100 text-gray-700">Direito Civil</SelectItem>
              <SelectItem value="trabalho" className="py-2 px-4 hover:bg-amber-100 text-gray-700">Direito do Trabalho</SelectItem>
              <SelectItem value="consumidor" className="py-2 px-4 hover:bg-amber-100 text-gray-700">Direito do Consumidor</SelectItem>
              <SelectItem value="familia" className="py-2 px-4 hover:bg-amber-100 text-gray-700">Direito de Família</SelectItem>
              <SelectItem value="outro" className="py-2 px-4 hover:bg-amber-100 text-gray-700">Outro</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div>
        <label htmlFor="caso_juridico" className="block text-sm font-medium text-gray-700 mb-1">Descrição do caso</label>
        <Textarea
          id="caso_juridico"
          name="caso_juridico"
          value={formData.caso_juridico}
          onChange={handleChange}
          placeholder="Descreva brevemente seu caso ou dúvida jurídica"
          className="w-full min-h-[120px] bg-gray-50 border-gray-200 focus:border-amber-300 focus:ring focus:ring-amber-200 focus:ring-opacity-50 rounded-md text-black"
          required
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
        disabled={loading}
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Enviando...
          </span>
        ) : (
          "Solicitar Análise Preliminar"
        )}
      </Button>
      
      <p className="text-xs text-gray-500 text-center mt-4">
        Suas informações estão seguras e protegidas por sigilo profissional.
      </p>
    </form>
  </div>
</div>
  );
};

export default LeadForm;