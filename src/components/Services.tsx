import React, { useState } from 'react';
import { FileText, Package2, Palette, Calendar, Pill, PenTool, BookOpen, Bot as Bottle } from 'lucide-react';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: FileText,
      title: 'Medical Leaflets',
      description: 'Precision-printed patient information leaflets with regulatory compliance and security features.',
      features: ['FDA Compliant', 'Multi-language', 'Security Features'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Package2,
      title: 'Medicine Boxes',
      description: 'Advanced pharmaceutical packaging with tamper-evident features and tracking technology.',
      features: ['Tamper-Evident', 'Smart Tracking', 'Custom Sizes'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: BookOpen,
      title: 'Medical Brochures',
      description: 'Professional brochures for healthcare professionals and patient education materials.',
      features: ['High-Quality Print', 'Custom Design', 'Bulk Orders'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Bottle,
      title: 'Syrup Bottles',
      description: 'Smart labels with QR codes and temperature-sensitive inks for liquid medications.',
      features: ['QR Codes', 'Temperature Sensitive', 'Waterproof'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: PenTool,
      title: 'Medical Stationery',
      description: 'Professional prescription pads with security watermarks and digital integration.',
      features: ['Security Watermarks', 'Custom Branding', 'Digital Ready'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Calendar,
      title: 'Medical Calendars',
      description: 'Custom medical calendars with appointment reminders and health tracking features.',
      features: ['Custom Design', 'Health Tracking', 'Appointment Slots'],
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Pill,
      title: 'Blister Packaging',
      description: 'Advanced blister packs for tablets with dosage tracking and compliance monitoring.',
      features: ['Child-Resistant', 'Dosage Tracking', 'Compliance Ready'],
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Palette,
      title: 'Color Matching',
      description: 'Precise color matching system ensuring perfect brand consistency across all materials.',
      features: ['Brand Consistency', 'Pantone Matching', 'Quality Control'],
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive printing and packaging solutions designed specifically for the pharmaceutical industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0px)'
              }}
            >
              {/* Icon */}
              <div className="p-6 pb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300">
            Request Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;