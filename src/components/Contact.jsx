import React from 'react';
import contactImage from '../assets/contact_image.png'; // Add your contact images
import Footer from './Footer';

const Contact = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto p-8">
        {/* Contact Header */}
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Contact <span className="text-blue-700">Us</span></h2>
        
        {/* Contact Details and Image Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-x-16 md:space-y-0">
          {/* Left - Image */}
          <div className="md:w-1/2">
            <img src={contactImage} alt="Contact" className="rounded-lg shadow-lg object-cover" />
          </div>

          {/* Right - Office Information */}
          <div className="md:w-1/2 text-gray-800 space-y-5">
            <div>
              <h3 className="text-xl font-semibold">Our Office</h3>
              <p>54709 Willms Station<br />
              Suite 350, Noida, India</p>
              <p>Tel: (91) 555-0132</p>
              <p>Email: QuickDocs@gmail.com</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Careers at QuickDocs</h3>
              <p>Learn more about our teams and job openings.</p>
              <button className="mt-3 px-6 py-2 bg-transparent border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition-all">
                Explore Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;
