import React from 'react';
import { FileText, Package2, Palette, Calendar, Pill, PenTool, BookOpen, Bot as Bottle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileText,
      title: 'Medical Leaflets',
      description: 'Precision-printed patient information leaflets with regulatory compliance',
      image: 'https://images.pexels.com/photos/3683086/pexels-photo-3683086.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: Package2,
      title: 'Medicine Boxes',
      description: 'Secure pharmaceutical packaging with tamper-evident features',
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: BookOpen,
      title: 'Brochures',
      description: 'High-quality marketing materials for healthcare professionals',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: Bottle,
      title: 'Syrup Bottles',
      description: 'Custom labels for pharmaceutical liquid medications',
      image: 'https://images.pexels.com/photos/3683083/pexels-photo-3683083.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: PenTool,
      title: 'Writing Pads',
      description: 'Professional prescription pads and medical stationery',
      image: 'https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: Calendar,
      title: 'Calendars',
      description: 'Branded medical calendars for healthcare facilities',
      image: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: Pill,
      title: 'Blister Packs',
      description: 'Specialized packaging for tablets and capsules',
      image: 'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      icon: Palette,
      title: 'Color Plates',
      description: 'Precise color matching for brand consistency',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive printing and packaging solutions tailored for the medical and pharmaceutical industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4 p-3 bg-white/20 backdrop-blur-sm rounded-full">
                  <service.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;