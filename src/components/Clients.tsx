import React from 'react';

const Clients = () => {
  const clients = [
    { 
      name: 'PharmaCorp', 
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
    },
    { 
      name: 'MediTech', 
      image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
    },
    { 
      name: 'HealthPlus', 
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
    },
    { 
      name: 'VitalCare', 
      image: 'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
    },
    { 
      name: 'BioMed', 
      image: 'https://images.pexels.com/photos/3683073/pexels-photo-3683073.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
    },
    { 
      name: 'GlobalHealth', 
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
    },
    { 
      name: 'MedSupply', 
      image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
    },
    { 
      name: 'PharmaLab', 
      image: 'https://images.pexels.com/photos/3683051/pexels-photo-3683051.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
    },
    { 
      name: 'MedCore', 
      image: 'https://images.pexels.com/photos/4386465/pexels-photo-4386465.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
    },
    { 
      name: 'LifeScience', 
      image: 'https://images.pexels.com/photos/3683048/pexels-photo-3683048.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-blue-600">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over 1000+ satisfied clients across the pharmaceutical and healthcare industry worldwide
          </p>
        </div>

        {/* Medium Speed Carousel */}
        <div className="relative mb-16 overflow-hidden">
          <div className="flex animate-scroll-medium">
            {/* First set */}
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 group"
              >
                <div className="w-32 h-32 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                    <p className="text-white text-sm font-semibold">{client.name}</p>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 mx-4 group"
              >
                <div className="w-32 h-32 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 relative">
                  <img
                    src={client.image}
                    alt={client.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3">
                    <p className="text-white text-sm font-semibold">{client.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '1000+', label: 'Happy Clients', icon: '👥' },
            { number: '5M+', label: 'Products Printed', icon: '📦' },
            { number: '25+', label: 'Years Experience', icon: '🏆' },
            { number: '99.9%', label: 'Quality Score', icon: '⭐' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;