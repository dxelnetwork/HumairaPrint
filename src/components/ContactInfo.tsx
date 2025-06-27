import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const ContactInfo = () => {
  const handleFacebookClick = () => {
    window.open('https://facebook.com/humairaprintingpackaging', '_blank');
  };

  const handleTwitterClick = () => {
    window.open('https://twitter.com/humairaprintpkg', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/company/humaira-printing-packaging', '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://instagram.com/humairaprintingpackaging', '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h3>
        <p className="text-gray-600">
          Get in touch with our team for all your pharmaceutical printing needs.
        </p>
      </div>

      <div className="space-y-6 mb-8">
        {/* Address */}
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
            <MapPin className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Office Address</h4>
            <p className="text-gray-600">
              123 Industrial Park<br />
              Pharmaceutical District<br />
              New York, NY 10001
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-green-100 rounded-lg flex-shrink-0">
            <Phone className="h-6 w-6 text-green-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Phone Number</h4>
            <p className="text-gray-600">+1 (555) 123-4567</p>
            <p className="text-gray-500 text-sm">Available 24/7 for urgent inquiries</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-purple-100 rounded-lg flex-shrink-0">
            <Mail className="h-6 w-6 text-purple-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Email Address</h4>
            <p className="text-gray-600">info@humairaprintingpackaging.com</p>
            <p className="text-gray-500 text-sm">We respond within 24 hours</p>
          </div>
        </div>

        {/* Business Hours */}
        <div className="flex items-start space-x-4">
          <div className="p-3 bg-orange-100 rounded-lg flex-shrink-0">
            <Clock className="h-6 w-6 text-orange-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Business Hours</h4>
            <div className="text-gray-600 space-y-1">
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="border-t border-gray-200 pt-6">
        <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
        <div className="flex space-x-4">
          <button 
            onClick={handleFacebookClick}
            className="p-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            title="Follow us on Facebook"
          >
            <Facebook className="h-5 w-5 text-white" />
          </button>
          <button 
            onClick={handleTwitterClick}
            className="p-3 bg-blue-400 hover:bg-blue-500 rounded-lg transition-colors"
            title="Follow us on Twitter"
          >
            <Twitter className="h-5 w-5 text-white" />
          </button>
          <button 
            onClick={handleLinkedInClick}
            className="p-3 bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors"
            title="Connect on LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-white" />
          </button>
          <button 
            onClick={handleInstagramClick}
            className="p-3 bg-pink-600 hover:bg-pink-700 rounded-lg transition-colors"
            title="Follow us on Instagram"
          >
            <Instagram className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-8">
        <h4 className="font-semibold text-gray-900 mb-4">Find Us</h4>
        <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1635959872076!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;