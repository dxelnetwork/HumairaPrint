import React, { useState, useEffect } from 'react';

const PhotoSlideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [
    {
      url: 'https://raw.githubusercontent.com/dxelnetwork/HumairaPrint/refs/heads/main/images/portfolio/jpg/Inner%20Carton.jpg',
      title: 'Inner Carton',
      category: 'Packaging'
    },
    {
      url: 'https://raw.githubusercontent.com/dxelnetwork/HumairaPrint/refs/heads/main/images/portfolio/jpg/Books.jpg',
      title: 'Books',
      category: 'Publishing'
    },
    {
      url: 'https://raw.githubusercontent.com/dxelnetwork/HumairaPrint/refs/heads/main/images/portfolio/jpg/Pad%20WireSpiral.jpg',
      title: 'Pad Wire/Spiral',
      category: 'Stationery'
    },
    {
      url: 'https://raw.githubusercontent.com/dxelnetwork/HumairaPrint/refs/heads/main/images/portfolio/jpg/Literature.jpg',
      title: 'Literature',
      category: 'Publishing'
    },
    {
      url: 'https://raw.githubusercontent.com/dxelnetwork/HumairaPrint/refs/heads/main/images/portfolio/jpg/Show%20Card%201.jpg',
      title: 'Show Card',
      category: 'Marketing'
    },
    {
      url: 'https://raw.githubusercontent.com/dxelnetwork/HumairaPrint/refs/heads/main/images/portfolio/jpg/Gift%20Box%201.jpg',
      title: 'Gift Box',
      category: 'Packaging'
    },
    {
      url: 'https://raw.githubusercontent.com/dxelnetwork/HumairaPrint/refs/heads/main/images/portfolio/jpg/Leaflet.jpg',
      title: 'Leaflet',
      category: 'Marketing'
    },
    {
      url: 'https://raw.githubusercontent.com/dxelnetwork/HumairaPrint/refs/heads/main/images/portfolio/jpg/Brochure.jpg',
      title: 'Brochure',
      category: 'Marketing'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [photos.length]);

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Work</span> in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the quality and precision of our printing and packaging solutions
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Square Slideshow */}
          <div className="relative w-full max-w-md mx-auto lg:mx-0">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl bg-white">
              {/* Main Image Container */}
              <div className="relative w-full h-full">
                {photos.map((photo, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentIndex 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105'
                    }`}
                  >
                    <img
                      src={photo.url}
                      alt={photo.title}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay with info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <div className="inline-block px-3 py-1 bg-blue-600 rounded-full text-sm font-medium mb-2">
                          {photo.category}
                        </div>
                        <h3 className="text-xl font-bold">{photo.title}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-600 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-600 rounded-full opacity-20"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
              <div className="bg-white rounded-xl shadow-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{photos.length}+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Quality You Can <span className="text-blue-600">See</span>
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From pharmaceutical packaging to promotional materials, our portfolio showcases 
              the precision, quality, and attention to detail that sets us apart in the industry. 
              Each project reflects our commitment to excellence and regulatory compliance.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-blue-600 mb-1">ISO</div>
                <div className="text-sm text-gray-600">Certified</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-green-600 mb-1">FDA</div>
                <div className="text-sm text-gray-600">Compliant</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-purple-600 mb-1">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                <div className="text-2xl font-bold text-orange-600 mb-1">99.9%</div>
                <div className="text-sm text-gray-600">Quality</div>
              </div>
            </div>

            <button 
              onClick={scrollToPortfolio}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              View Full Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoSlideshow;