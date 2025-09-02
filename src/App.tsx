import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Management from './components/Management';
import Commitment from './components/Commitment';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';
import PolicyModal from './components/PolicyModal';
import CookieBanner from './components/CookieBanner';
import PhotoSlideshow from './components/PhotoSlideshow';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPolicy, setCurrentPolicy] = useState('');

  const handlePolicyClick = (policy: string) => {
    setCurrentPolicy(policy);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentPolicy('');
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <Management />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="clients">
        <Clients />
      </div>
      <PhotoSlideshow />
      <Commitment />
      <div id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact <span className="text-blue-600">Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to discuss your printing & packaging needs? Get in touch with our team of experts.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <ContactInfo />
            <ContactForm />
          </div>
          
          {/* Awesome Design Element */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"></div>
              <div className="absolute top-32 right-20 w-16 h-16 bg-white rounded-full"></div>
              <div className="absolute bottom-20 left-32 w-12 h-12 bg-white rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-24 h-24 bg-white rounded-full"></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Join 6+ satisfied clients who trust us with their pharmaceutical printing needs. 
                Let's create something amazing together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center">
                  <span>Get Free Quote</span>
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm opacity-80">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">ISO</div>
                  <div className="text-sm opacity-80">Certified</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">FDA</div>
                  <div className="text-sm opacity-80">Compliant</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">99.9%</div>
                  <div className="text-sm opacity-80">Quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer onPolicyClick={handlePolicyClick} />
      
      <PolicyModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        policyType={currentPolicy}
      />
      
      <CookieBanner onPolicyClick={handlePolicyClick} />
    </div>
  );
}

export default App;