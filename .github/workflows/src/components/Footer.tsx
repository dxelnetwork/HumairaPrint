import React from 'react';
import { Phone, Mail, MapPin, Printer, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mr-3">
                <Printer className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">Humaira Printing & Packaging</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading pharmaceutical printing and packaging solutions provider, committed to quality, safety, and innovation in healthcare packaging.
            </p>
            <div className="flex space-x-4">
              <button className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors">
                <Facebook className="h-4 w-4" />
              </button>
              <button className="p-3 bg-blue-400 hover:bg-blue-500 rounded-full transition-colors">
                <Twitter className="h-4 w-4" />
              </button>
              <button className="p-3 bg-blue-700 hover:bg-blue-800 rounded-full transition-colors">
                <Linkedin className="h-4 w-4" />
              </button>
              <button className="p-3 bg-pink-600 hover:bg-pink-700 rounded-full transition-colors">
                <Instagram className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer">Medical Leaflets</li>
              <li className="hover:text-white transition-colors cursor-pointer">Medicine Boxes</li>
              <li className="hover:text-white transition-colors cursor-pointer">Pharmaceutical Brochures</li>
              <li className="hover:text-white transition-colors cursor-pointer">Syrup Bottle Labels</li>
              <li className="hover:text-white transition-colors cursor-pointer">Blister Packaging</li>
              <li className="hover:text-white transition-colors cursor-pointer">Medical Stationery</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-white transition-colors cursor-pointer">Quality Standards</li>
              <li className="hover:text-white transition-colors cursor-pointer">Certifications</li>
              <li className="hover:text-white transition-colors cursor-pointer">Case Studies</li>
              <li className="hover:text-white transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>123 Industrial Park</p>
                  <p>Pharmaceutical District</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3 flex-shrink-0" />
                <span className="text-gray-300">info@humairaprintingpackaging.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Humaira Printing & Packaging, All rights reserved | Developed by <a href="https://dxel.net" target="_blank">DXEL Network</a>
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;