import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Column (Logo and Description) */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4">QuickDocs</h2>
            <p className="text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text since the 1500s.
            </p>
          </div>
          
          {/* Middle Column (Company Links) */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold mb-4">COMPANY</h2>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:underline">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:underline">About Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:underline">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:underline">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Right Column (Contact Information) */}
          <div className="text-center md:text-left">
            <h2 className="text-xl font-semibold mb-4">GET IN TOUCH</h2>
            <ul>
              <li className="mb-2 text-gray-600">+1-212-456-7890</li>
              <li className="mb-2 text-gray-600">greatstackdev@gmail.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t pt-6 text-center md:text-left text-gray-600">
          <p>Copyright &copy; 2024 QuickDocs - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
