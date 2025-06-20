import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import Clients from './components/Clients';
import Management from './components/Management';
import Commitment from './components/Commitment';
import Footer from './components/Footer';

function App() {
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
      <div id="clients">
        <Clients />
      </div>
      <Commitment />
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;