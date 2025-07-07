// pages/Index.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/FAQ";
import CopySection from "@/components/Copy";
import Endereco from "@/components/Endereco";
import Footer from "@/components/Footer";

import Time from "@/components/Time";
import LeadForm from  "@/components/LeadForm";


const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CopySection />
      
      <Time />   
      <Testimonials />
      <Download />
      <Endereco />
      <LeadForm />
      <Footer />      
    </div>
  );
};

export default Index;