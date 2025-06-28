import React from 'react';

const Clients = () => {
  const clients = [
    { 
      name: 'Akij Group', 
      logo: 'https://seekvectorlogo.com/wp-content/uploads/2019/12/akij-group-vector-logo.png',
      alt: 'Akij Group'
    },
    { 
      name: 'Adidas', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Adidas-Logo.png',
      alt: 'Adidas Logo'
    },
    { 
      name: 'Walmart', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Walmart-Logo.png',
      alt: 'Walmart Logo'
    },
    { 
      name: 'Amazon', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png',
      alt: 'Amazon Logo'
    },
    { 
      name: 'Apple', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png',
      alt: 'Apple Logo'
    },
    { 
      name: 'Google', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Google-Logo.png',
      alt: 'Google Logo'
    },
    { 
      name: 'Microsoft', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Microsoft-Logo.png',
      alt: 'Microsoft Logo'
    },
    { 
      name: 'Samsung', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo.png',
      alt: 'Samsung Logo'
    },
    { 
      name: 'Coca Cola', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Coca-Cola-Logo.png',
      alt: 'Coca Cola Logo'
    },
    { 
      name: 'McDonald\'s', 
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/McDonalds-Logo.png',
      alt: 'McDonald\'s Logo'
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
                <div className="w-32 h-32 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-white hover:shadow-lg transition-all duration-300 p-4">
                  <img 
                    src={client.logo}
                    alt={client.alt}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0 mx-4 group"
              >
                <div className="w-32 h-32 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-white hover:shadow-lg transition-all duration-300 p-4">
                  <img 
                    src={client.logo}
                    alt={client.alt}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                  />
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