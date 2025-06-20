import React, { useEffect, useState } from 'react';
import { ChevronDown, Package, Printer, Palette } from 'lucide-react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />
      
      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-blue-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-purple-300 rounded-full animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4 pt-16">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8 space-x-4">
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <Printer className="h-8 w-8" />
            </div>
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <Package className="h-8 w-8" />
            </div>
            <div className="p-4 bg-white/10 rounded-full backdrop-blur-sm">
              <Palette className="h-8 w-8" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Precision in
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Printing
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Transforming medical packaging with innovative solutions. From leaflets to medicine boxes, we deliver excellence in every print.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToServices}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Explore Services
            </button>
            <button className="px-8 py-4 border-2 border-white/30 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              View Portfolio
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default Hero;