import React from 'react';

const Clients = () => {
  const clients = [
    { name: 'Nike', color: 'from-orange-500 to-red-500' },
    { name: 'Adidas', color: 'from-blue-500 to-cyan-500' },
    { name: 'Walmart', color: 'from-blue-600 to-blue-700' },
    { name: 'Amazon', color: 'from-orange-400 to-yellow-500' },
    { name: 'Apple', color: 'from-gray-600 to-gray-800' },
    { name: 'Google', color: 'from-blue-500 to-green-500' },
    { name: 'Microsoft', color: 'from-blue-600 to-cyan-600' },
    { name: 'Samsung', color: 'from-blue-700 to-indigo-700' },
    { name: 'Coca Cola', color: 'from-red-600 to-red-700' },
    { name: 'McDonald\'s', color: 'from-yellow-500 to-red-500' }
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
                <div className="w-32 h-32 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${client.color} rounded-xl mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white font-bold text-xl">{client.name.charAt(0)}</span>
                    </div>
                    <p className="text-xs font-semibold text-gray-700">{client.name}</p>
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
                <div className="w-32 h-32 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${client.color} rounded-xl mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white font-bold text-xl">{client.name.charAt(0)}</span>
                    </div>
                    <p className="text-xs font-semibold text-gray-700">{client.name}</p>
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