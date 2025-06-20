import React from 'react';
import { Shield, Award, Users, Zap, Heart, Globe } from 'lucide-react';

const Commitment = () => {
  const commitments = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'ISO 9001 certified processes ensuring consistent quality in every product.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: 'Regulatory Compliance',
      description: 'Full compliance with FDA, EMA, and other international pharmaceutical standards.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Users,
      title: 'Customer Partnership',
      description: 'Long-term relationships built on trust, reliability, and exceptional service.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuous investment in cutting-edge printing technology and sustainable solutions.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Heart,
      title: 'Patient Safety',
      description: 'Every product designed with patient safety and medication adherence in mind.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Environmental responsibility through eco-friendly materials and processes.',
      color: 'from-teal-500 to-green-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Commitment</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dedicated to excellence in pharmaceutical packaging with unwavering focus on quality, safety, and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commitments.map((commitment, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-8 hover:bg-gray-700 transition-all duration-300 group hover:-translate-y-2 border border-gray-700"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${commitment.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <commitment.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">{commitment.title}</h3>
              <p className="text-gray-300 leading-relaxed">{commitment.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Commitment Statement */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-3xl p-12 backdrop-blur-sm border border-gray-700">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Our Promise to You</h3>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              We understand that pharmaceutical packaging is more than just printing – it's about protecting what matters most. 
              Our commitment extends beyond delivering exceptional products to ensuring that every package we create contributes 
              to better patient outcomes and safer healthcare delivery.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-gray-300">Quality Guarantee</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Zero</div>
                <div className="text-gray-300">Compromise on Safety</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;