import React from 'react';
import { Quote, Linkedin, Mail, Phone } from 'lucide-react';

const Management = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Leadership</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the visionary leaders driving innovation in pharmaceutical packaging
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* CEO Profile */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <div className="w-64 h-64 mx-auto lg:mx-0 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=500" 
                  alt="CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="h-8 w-8 text-white" />
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Humayun Kabir</h3>
              <p className="text-xl text-blue-600 mb-4">Chief Executive Officer</p>
              <p className="text-gray-600 mb-6">20+ Years in Printing & Packaging</p>
              
              <div className="flex justify-center lg:justify-start space-x-4 mb-8">
                <button className="p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </button>
                <button className="p-3 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition-colors">
                  <Mail className="h-5 w-5" />
                </button>
                <button className="p-3 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors">
                  <Phone className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* CEO Message */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="mb-6">
              <Quote className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">CEO's Message</h3>
            </div>
            
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p>
                "At our company, we don't just print and package – we safeguard health. Every medical leaflet, every medicine box, every pharmaceutical label we produce carries the responsibility of patient safety and regulatory compliance."
              </p>
              
              <p>
                "Our commitment to excellence in pharmaceutical packaging stems from understanding that our work directly impacts patient care. We combine cutting-edge technology with meticulous attention to detail to ensure every product meets the highest standards."
              </p>
              
              <p>
                "As we continue to innovate and expand our capabilities, our mission remains unchanged: to be the trusted partner that healthcare companies rely on for quality, precision, and integrity in every print."
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">HK</span>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Humayun Kabir</div>
                  <div className="text-sm text-gray-500">Chief Executive Officer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Management;