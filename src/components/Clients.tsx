import React from 'react';

const Clients = () => {
  const clients = [
    { name: 'PharmaCorp', logo: 'https://images.pexels.com/photos/3683086/pexels-photo-3683086.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'MediTech', logo: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'HealthPlus', logo: 'https://images.pexels.com/photos/3683083/pexels-photo-3683083.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'VitalCare', logo: 'https://images.pexels.com/photos/3683098/pexels-photo-3683098.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'BioMed', logo: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'GlobalHealth', logo: 'https://images.pexels.com/photos/733856/pexels-photo-733856.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'MedSupply', logo: 'https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'PharmaLab', logo: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=100' }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-blue-600">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over 500+ satisfied clients across the pharmaceutical and healthcare industry
          </p>
        </div>

        {/* Infinite Carousel */}
        <div className="relative">
          <div className="flex animate-scroll">
            {/* First set */}
            {clients.map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 w-32 h-32 bg-gray-100 rounded-2xl flex items-center justify-center hover:bg-gray-200 transition-colors duration-300 shadow-lg"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{client.name.charAt(0)}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">{client.name}</p>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 mx-8 w-32 h-32 bg-gray-100 rounded-2xl flex items-center justify-center hover:bg-gray-200 transition-colors duration-300 shadow-lg"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{client.name.charAt(0)}</span>
                  </div>
                  <p className="text-sm font-medium text-gray-700">{client.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">1M+</div>
            <div className="text-gray-600">Products Printed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">99%</div>
            <div className="text-gray-600">Quality Score</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;