import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'Inner Carton',
      category: 'Packaging',
      image: 'https://raw.githubusercontent.com/dxelnetwork/HumairaPrint/refs/heads/main/images/portfolio/jpg/Inner%20Carton.jpg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-quality inner cartons for pharmaceutical and consumer products'
    },
    {
      id: 2,
      title: 'Books',
      category: 'Publishing',
      image: 'https://raw.githubusercontent.com/dxelnetwork/HumairaPrint/refs/heads/main/images/portfolio/jpg/Books.jpg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional book printing with perfect binding and quality paper'
    },
    {
      id: 3,
      title: 'Pad Wire/Spiral',
      category: 'Stationery',
      image: 'https://raw.githubusercontent.com/dxelnetwork/HumairaPrint/refs/heads/main/images/portfolio/jpg/Pad%20WireSpiral.jpg?auto=compress&cs=tinysrgb&w=800',
      description: 'Wire-bound and spiral notebooks with custom covers and layouts'
    },
    {
      id: 4,
      title: 'Literature',
      category: 'Publishing',
      image: 'https://raw.githubusercontent.com/dxelnetwork/HumairaPrint/refs/heads/main/images/portfolio/jpg/Literature.jpg?auto=compress&cs=tinysrgb&w=800',
      description: 'Educational and promotional literature with professional design'
    },
    {
      id: 5,
      title: 'Show Card',
      category: 'Marketing',
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Eye-catching show cards for retail displays and promotions'
    },
    {
      id: 6,
      title: 'Gift Box',
      category: 'Packaging',
      image: 'https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Elegant gift boxes with custom printing and finishing'
    },
    {
      id: 7,
      title: 'Leaflet',
      category: 'Marketing',
      image: 'https://images.pexels.com/photos/4386464/pexels-photo-4386464.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Informative leaflets with vibrant colors and clear messaging'
    },
    {
      id: 8,
      title: 'Dangler',
      category: 'Marketing',
      image: 'https://images.pexels.com/photos/3683051/pexels-photo-3683051.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Promotional danglers for point-of-sale marketing'
    },
    {
      id: 9,
      title: 'Brochure',
      category: 'Marketing',
      image: 'https://images.pexels.com/photos/4386465/pexels-photo-4386465.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional brochures with fold options and premium finishes'
    },
    {
      id: 10,
      title: 'Diary',
      category: 'Stationery',
      image: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Custom diaries with personalized covers and layouts'
    },
    {
      id: 11,
      title: 'Calendar',
      category: 'Stationery',
      image: 'https://images.pexels.com/photos/273222/pexels-photo-273222.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Wall and desk calendars with custom designs and branding'
    },
    {
      id: 12,
      title: 'Letterhead Pad',
      category: 'Stationery',
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional letterhead pads with company branding'
    },
    {
      id: 13,
      title: 'Envelope',
      category: 'Stationery',
      image: 'https://images.pexels.com/photos/6373478/pexels-photo-6373478.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Custom envelopes in various sizes with professional printing'
    },
    {
      id: 14,
      title: 'File Folder',
      category: 'Stationery',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Durable file folders with custom tabs and labeling'
    },
    {
      id: 15,
      title: 'Annual Report',
      category: 'Publishing',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional annual reports with premium binding and paper'
    },
    {
      id: 16,
      title: 'Promotional Materials',
      category: 'Marketing',
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'All kinds of promotional materials for marketing campaigns'
    },
    {
      id: 17,
      title: 'Printing & Manufacturing',
      category: 'Manufacturing',
      image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Various printing and manufacturing items for diverse industries'
    },
    {
      id: 18,
      title: 'Shopping Bag',
      category: 'Packaging',
      image: 'https://images.pexels.com/photos/264985/pexels-photo-264985.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Custom shopping bags in paper, plastic, and eco-friendly materials'
    }
  ];

  const categories = ['All', ...Array.from(new Set(portfolioItems.map(item => item.category)))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredItems.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive collection of printing and packaging solutions for various industries
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-200">{item.category}</p>
                    </div>
                    <ExternalLink className="h-5 w-5" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full mb-3">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image */}
              <div className="bg-white rounded-lg overflow-hidden">
                <img
                  src={filteredItems[selectedImage].image}
                  alt={filteredItems[selectedImage].title}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                      {filteredItems[selectedImage].category}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {selectedImage + 1} of {filteredItems.length}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {filteredItems[selectedImage].title}
                  </h3>
                  <p className="text-gray-600">
                    {filteredItems[selectedImage].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;