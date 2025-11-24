import { useState, useEffect } from 'react';

export function Navigation() {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-panel shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="text-2xl font-bold fantasy-glow">EIGIS</div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-white/80 hover:text-white transition-colors">HOME</a>
            <a href="#news" className="text-white/80 hover:text-white transition-colors">NEWS</a>
            <a href="#features" className="text-white/80 hover:text-white transition-colors">FEATURES</a>
            <a href="#story" className="text-white/80 hover:text-white transition-colors">STORY</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">ABOUT</a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="hidden md:block px-6 py-2 text-sm font-bold text-white fantasy-border hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]">
            JOIN DISCORD
          </button>
          <button className="px-6 py-2 text-sm font-bold text-black bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
            DOWNLOAD
          </button>
        </div>
      </div>
    </nav>
  );
}
