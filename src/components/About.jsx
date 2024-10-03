import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-10">
      {/* Main content area */}
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">QuickDocs</h1>
            <p className="text-gray-600 text-lg max-w-md mx-auto">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        {/* Footer section */}
        <div className="flex justify-between mt-16">
          {/* Company Section */}
          <div>
            <h3 className="font-bold text-xl mb-4">COMPANY</h3>
            <ul className="text-gray-600 space-y-2">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Get in touch Section */}
          <div>
            <h3 className="font-bold text-xl mb-4">GET IN TOUCH</h3>
            <ul className="text-gray-600 space-y-2">
              <li>+91-212-456-7890</li>
              <li>QuickDocs@gmail.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-10 text-center text-gray-500">
        <p>Copyright 2024 © QuickDocs - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default About;
