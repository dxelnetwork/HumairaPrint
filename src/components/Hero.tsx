import React, { useEffect, useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

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

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden flex items-center">
      {/* Subtle 3D Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          style={{ transform: `translateZ(${Math.sin(scrollY * 0.01) * 20}px)` }}
        />
        <div 
          className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          style={{ transform: `translateZ(${Math.cos(scrollY * 0.008) * 15}px)` }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center text-white px-4 pt-20 pb-16">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Professional
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Printing & Packaging
            </span>
            <span className="block">Solutions</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Trusted by industry professionals nationwide for precision printing, 
            regulatory compliance, and innovative packaging solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button 
              onClick={scrollToServices}
              className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center"
            >
              Explore Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={scrollToPortfolio}
              className="px-8 py-4 border-2 border-gray-300 hover:border-white hover:bg-white/10 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              View Portfolio
            </button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto">
            {[
              { number: '1000+', label: 'Clients Served' },
              { number: '25+', label: 'Years Experience' },
              { number: '99.9%', label: 'Quality Score' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center p-3 sm:p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
                style={{
                  transform: `translateZ(${10 + index * 5}px)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <ChevronDown className="h-6 w-6 text-white/70" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;