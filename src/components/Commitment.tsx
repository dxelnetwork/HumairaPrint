import React from 'react';
import { Shield, Award, Users, Zap, Heart, Globe, Cpu, Microscope } from 'lucide-react';

const Commitment = () => {
  const commitments = [
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'ISO 9001 certified with rigorous quality control systems ensuring 99.99% precision in every product.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: 'Regulatory Excellence',
      description: 'Full compliance with FDA, EMA, and international pharmaceutical standards with proper documentation.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Users,
      title: 'Customer Partnership',
      description: 'Long-term relationships built on trust, reliability, and exceptional service with 24/7 support.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Innovation Hub',
      description: 'Cutting-edge printing technology with sustainable materials and efficient production processes.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Heart,
      title: 'Patient Safety',
      description: 'Every product designed with patient safety, medication adherence, and accessibility in mind.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Environmentally responsible operations with eco-friendly materials and renewable energy sources.',
      color: 'from-teal-500 to-green-500'
    },
    {
      icon: Cpu,
      title: 'Smart Solutions',
      description: 'Advanced packaging solutions with tracking capabilities and tamper-evident features.',
      color: 'from-violet-500 to-purple-500'
    },
    {
      icon: Microscope,
      title: 'Research & Development',
      description: 'Continuous innovation in materials science and packaging technology for better healthcare outcomes.',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-blue-400">Commitment</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Dedicated to excellence in pharmaceutical packaging with unwavering focus on quality, innovation, and sustainability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {commitments.map((commitment, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${commitment.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <commitment.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-white">
                {commitment.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {commitment.description}
              </p>
            </div>
          ))}
        </div>

        {/* Promise Section */}
        <div className="bg-gray-800 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-6 text-blue-400">
            Our Promise to Clients
          </h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            We're committed to supporting clients with reliable, compliant, and innovative packaging solutions that contribute to improved outcomes and safer product delivery nationwide.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { number: '100%', label: 'Quality Guarantee', icon: '🎯' },
              { number: '24/7', label: 'Customer Support', icon: '🤝' },
              { number: 'Zero', label: 'Compromise on Safety', icon: '🛡️' }
            ].map((promise, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl mb-3">{promise.icon}</div>
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {promise.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {promise.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;