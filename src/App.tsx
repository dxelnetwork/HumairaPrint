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
      <Commitment />
      <div id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Contact <span className="text-blue-600">Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to discuss your pharmaceutical printing needs? Get in touch with our team of experts.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
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