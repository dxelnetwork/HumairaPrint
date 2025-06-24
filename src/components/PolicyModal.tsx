import React from 'react';
import { X } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
  policyType: string;
}

const PolicyModal: React.FC<PolicyModalProps> = ({ isOpen, onClose, policyType }) => {
  if (!isOpen) return null;

  const getPolicyContent = () => {
    switch (policyType) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Information We Collect</h3>
                <p className="text-gray-600 mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  make a purchase, request information, or contact us for support.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Personal information (name, email, phone number)</li>
                  <li>Company information and business details</li>
                  <li>Communication preferences</li>
                  <li>Technical information about your device and browser</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">How We Use Your Information</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>To provide and improve our services</li>
                  <li>To communicate with you about our products and services</li>
                  <li>To process transactions and fulfill orders</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Information Sharing</h3>
                <p className="text-gray-600">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this policy or as required by law.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Data Security</h3>
                <p className="text-gray-600">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                <p className="text-gray-600">
                  If you have questions about this Privacy Policy, please contact us at 
                  privacy@humairaprintingpackaging.com
                </p>
              </div>
            </div>
          )
        };

      case 'terms':
        return {
          title: 'Terms of Service',
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Acceptance of Terms</h3>
                <p className="text-gray-600">
                  By accessing and using our services, you accept and agree to be bound by the terms 
                  and provision of this agreement.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Use License</h3>
                <p className="text-gray-600 mb-4">
                  Permission is granted to temporarily use our services for personal, non-commercial 
                  transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for commercial purposes or public display</li>
                  <li>Attempt to reverse engineer any software</li>
                  <li>Remove any copyright or proprietary notations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Service Terms</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>All orders are subject to availability and confirmation</li>
                  <li>Prices are subject to change without notice</li>
                  <li>We reserve the right to refuse service to anyone</li>
                  <li>Custom orders may require additional terms and conditions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Limitation of Liability</h3>
                <p className="text-gray-600">
                  In no event shall Humaira Printing & Packaging be liable for any damages arising 
                  out of the use or inability to use our services.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Governing Law</h3>
                <p className="text-gray-600">
                  These terms are governed by and construed in accordance with the laws of the 
                  jurisdiction in which our company is registered.
                </p>
              </div>
            </div>
          )
        };

      case 'cookies':
        return {
          title: 'Cookie Policy',
          content: (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">What Are Cookies</h3>
                <p className="text-gray-600">
                  Cookies are small text files that are placed on your computer or mobile device when 
                  you visit our website. They help us provide you with a better experience by remembering 
                  your preferences and understanding how you use our site.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Types of Cookies We Use</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800">Essential Cookies</h4>
                    <p className="text-gray-600">
                      These cookies are necessary for the website to function properly and cannot be disabled.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Analytics Cookies</h4>
                    <p className="text-gray-600">
                      These help us understand how visitors interact with our website by collecting information anonymously.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Functional Cookies</h4>
                    <p className="text-gray-600">
                      These cookies enable enhanced functionality and personalization, such as remembering your preferences.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Marketing Cookies</h4>
                    <p className="text-gray-600">
                      These cookies track your online activity to help advertisers deliver more relevant advertising.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Managing Cookies</h3>
                <p className="text-gray-600 mb-4">
                  You can control and manage cookies in various ways:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Browser settings: Most browsers allow you to refuse cookies</li>
                  <li>Third-party tools: Use privacy tools to block tracking</li>
                  <li>Opt-out links: Use provided opt-out mechanisms</li>
                  <li>Cookie preferences: Adjust settings in our cookie banner</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Third-Party Cookies</h3>
                <p className="text-gray-600">
                  We may use third-party services that place cookies on your device. These services 
                  have their own privacy policies and cookie practices.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Updates to This Policy</h3>
                <p className="text-gray-600">
                  We may update this Cookie Policy from time to time. Any changes will be posted on 
                  this page with an updated revision date.
                </p>
              </div>
            </div>
          )
        };

      default:
        return { title: '', content: null };
    }
  };

  const { title, content } = getPolicyContent();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {content}
        </div>
        
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyModal;