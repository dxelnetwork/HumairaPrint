import React from 'react';

const Clients = () => {
  const clients = [
    { 
      name: 'ACI', 
      logo: 'https://raw.githubusercontent.com/dxelnetwork/HumairaPrint/refs/heads/main/images/client%20logo/aci.png',
      alt: 'ACI'
    },
    { 
      name: 'Akij Group', 
      logo: 'https://raw.githubusercontent.com/dxelnetwork/HumairaPrint/refs/heads/main/images/client%20logo/akij.png',
      alt: 'Akij Group'
    },
    { 
      name: 'Everest', 
      logo: 'https://raw.githubusercontent.com/dxelnetwork/HumairaPrint/refs/heads/main/images/client%20logo/everest.png',
      alt: 'Everest'
    },
    { 
      name: 'Incepta', 
      logo: 'https://raw.githubusercontent.com/dxelnetwork/HumairaPrint/refs/heads/main/images/client%20logo/incepta.png',
      alt: 'Incepta'
    },
    { 
      name: 'Opsonin', 
      logo: 'https://raw.githubusercontent.com/dxelnetwork/HumairaPrint/refs/heads/main/images/client%20logo/opsonin.png',
      alt: 'Opsonin'
    },
    { 
      name: 'Renata', 
      logo: 'https://raw.githubusercontent.com/dxelnetwork/HumairaPrint/refs/heads/main/images/client%20logo/renata.png',
      alt: 'Renata'
    },
        { 
      name: 'Renata', 
      logo: 'https://raw.githubusercontent.com/dxelnetwork/HumairaPrint/refs/heads/main/images/client%20logo/sqrpharma.png',
      alt: 'Renata'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-blue-600">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Over 6+ satisfied clients across the pharmaceutical and healthcare industry nationwide
          </p>
        </div>

        {/* Medium Speed Carousel */}
        <div className="relative mb-16 overflow-hidden">
          <div className="flex animate-infinite-scroll">
            {/* Triple the logos for seamless infinite scroll */}
            {[...clients, ...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-3 sm:mx-6"
              >
                <div className="w-20 h-20 sm:w-28 sm:h-28 bg-gray-50 rounded-xl flex items-center justify-center hover:bg-white hover:shadow-lg transition-all duration-300 p-3 sm:p-4 group">
                  <img 
                    src={client.logo}
                    alt={client.alt}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
          {[
            { number: '6+', label: 'Happy Clients', icon: '👥' },
            { number: '5M+', label: 'Products Printed', icon: '📦' },
            { number: '16+', label: 'Years Experience', icon: '🏆' },
            { number: '99.9%', label: 'Quality Score', icon: '⭐' }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 sm:p-6 bg-gray-50 rounded-xl">
              <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{stat.icon}</div>
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">
                {stat.number}
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">
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