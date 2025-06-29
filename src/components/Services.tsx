import React, { useState } from 'react';
import { Printer, Scissors, Package, Settings, FileText, BookOpen, Layers, Zap } from 'lucide-react';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      icon: Printer,
      title: 'Offset Printing',
      description: 'High-quality offset printing for large volume pharmaceutical packaging with precise color matching.',
      features: ['High Volume', 'Color Precision', 'Cost Effective'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Scissors,
      title: 'Cutting Services',
      description: 'Precision cutting services for various materials including paper, cardboard, and specialty substrates.',
      features: ['Precision Cutting', 'Multiple Materials', 'Custom Sizes'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Settings,
      title: 'Die Cutting',
      description: 'Advanced die cutting for complex shapes and designs with tight tolerances and clean edges.',
      features: ['Complex Shapes', 'Tight Tolerances', 'Clean Edges'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Package,
      title: 'Auto Gluing',
      description: 'Automated gluing systems for consistent, strong bonds in pharmaceutical packaging applications.',
      features: ['Automated Process', 'Strong Bonds', 'Consistent Quality'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Layers,
      title: 'Auto Plate Making',
      description: 'Computer-to-plate technology for fast, accurate plate production with superior image quality.',
      features: ['CTP Technology', 'Fast Production', 'Superior Quality'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: BookOpen,
      title: 'Binding Services',
      description: 'Professional binding solutions including perfect binding, saddle stitching, and spiral binding.',
      features: ['Multiple Options', 'Professional Finish', 'Durable Results'],
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: FileText,
      title: 'Lamination',
      description: 'Protective lamination services to enhance durability and appearance of printed materials.',
      features: ['UV Protection', 'Enhanced Durability', 'Professional Look'],
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Zap,
      title: 'Finishing Services',
      description: 'Complete finishing solutions including embossing, foil stamping, and UV coating applications.',
      features: ['Embossing', 'Foil Stamping', 'UV Coating'],
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
            Professional printing and packaging services with state-of-the-art equipment and expert craftsmanship
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
          <button 
            onClick={scrollToContact}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Request Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;