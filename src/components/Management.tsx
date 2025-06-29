import React, { useState, useEffect } from 'react';
import { Quote, Linkedin, Mail, Phone, Award, Users, Target } from 'lucide-react';

const Management = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePhoneClick = () => {
    window.open('tel:+8801303000250', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:hello@dxel.net', '_self');
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/myselfhasan', '_blank');
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-blue-600">Leadership</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experienced professionals dedicated to delivering excellence in printing & packaging.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* CEO Profile */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://raw.githubusercontent.com/dxelnetwork/HumairaPrint/refs/heads/main/images/ceo.jpg?auto=compress&cs=tinysrgb&w=500" 
                  alt="CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Achievement badge */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">
                Md. Homyun Kabir
              </h3>
              <p className="text-xl text-blue-600 font-semibold">Chief Executive Officer</p>
              <p className="text-gray-600">16+ Years in Printing & Packaging Technology</p>
              
              {/* Achievement badges */}
              <div className="flex justify-center lg:justify-start space-x-4 pt-4">
                <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700 text-sm">Industry Leader</span>
                </div>
                <div className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm">
                  <Target className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 text-sm">Innovation Expert</span>
                </div>
              </div>
              
              {/* Contact buttons - Square format */}
              <div className="flex justify-center lg:justify-start space-x-3 pt-6">
                <button 
                  onClick={handleLinkedInClick}
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors duration-300 text-white flex items-center justify-center"
                  title="Connect on LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </button>
                <button 
                  onClick={handleEmailClick}
                  className="w-12 h-12 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors duration-300 text-white flex items-center justify-center"
                  title="Send Email"
                >
                  <Mail className="h-5 w-5" />
                </button>
                <button 
                  onClick={handlePhoneClick}
                  className="w-12 h-12 bg-green-600 hover:bg-green-700 rounded-lg transition-colors duration-300 text-white flex items-center justify-center"
                  title="Call Now"
                >
                  <Phone className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* CEO Message */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Quote className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">CEO's Message</h3>
            </div>
            
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                "At Humaira Printing & Packaging, we understand that pharmaceutical packaging is more than just printing – it's about patient safety, regulatory compliance, and brand trust."
              </p>
              
              <p>
                "Our commitment to excellence drives us to continuously invest in the latest technology and maintain the highest quality standards. Every product we create undergoes rigorous testing to ensure it meets international pharmaceutical packaging requirements."
              </p>
              
              <p>
                "We're proud to serve industry professionals nationwide and contribute to better patient outcomes through our innovative packaging solutions."
              </p>
            </div>
            
            {/* Signature */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">HK</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Md. Homyun Kabir</div>
                  <div className="text-blue-600 text-sm">Chief Executive Officer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Management;