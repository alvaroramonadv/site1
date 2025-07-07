import { Button } from "@/components/ui/button";
import { useState, useEffect } from 'react';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 transition-all duration-300
        ${scrolled ? 'bg-black/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <div className="flex justify-center">
          
        </div>
      </div>
    </nav>

  );
};

export default Navbar;