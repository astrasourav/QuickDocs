import React from 'react';
import first_image from '../assets/header_img.png'
import derma from '../assets/Dermatologist.svg'
import gen_phy from '../assets/General_physician.svg'
import gyno from '../assets/Gynecologist.svg'
import pedra from '../assets/Pediatricians.svg'
import neuro from '../assets/Neurologist.svg'
import gastro from '../assets/Gastroenterologist.svg'
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      {/* First Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="text-center lg:text-left max-w-lg lg:max-w-md">
            <h1 className="text-4xl font-bold mb-4">Book Appointment With Trusted Doctors</h1>
            <p className="mb-6 text-lg">
              Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
            </p>
            <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full shadow-lg hover:bg-blue-100">
              Book appointment &rarr;
            </button>
          </div>

          {/* Image Section */}
          <div className="mt-8 lg:mt-0">
            <img 
              src={first_image} 
              alt="Doctors" 
              className="w-full max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </section>
       {/* Speciality Section */}
       <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Find by Speciality</h2>
          <p className="mb-6 text-gray-600">
            Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
          </p>

          {/* Speciality Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Speciality Item */}
            <div className="flex flex-col items-center">
              <a href='#'><img src={gen_phy} alt="General Physician" className="mb-4"/></a>
              <p className="text-lg font-semibold">General Physician</p>
            </div>
            {/* Repeat for Other Specialities */}
            <div className="flex flex-col items-center">
            <a href='#'><img src={gyno} alt="Gynecologist" className="mb-4"/></a>
              <p className="text-lg font-semibold">Gynecologist</p>
            </div>
            <div className="flex flex-col items-center">
            <a href='#'><img src={derma} alt="Dermatologist" className="mb-4"/></a>
              <p className="text-lg font-semibold">Dermatologist</p>
            </div>
            <div className="flex flex-col items-center">
            <a href='#'><img src={pedra} alt="Pediatricians" className="mb-4"/></a>
              <p className="text-lg font-semibold">Pediatricians</p>
            </div>
            <div className="flex flex-col items-center">
            <a href='#'><img src={neuro} alt="Neurologist" className="mb-4"/></a>
               <p className="text-lg font-semibold">Neurologist</p>
            </div>
            <div className="flex flex-col items-center">
            <a href='#'><img src={gastro} alt="Gastroenterologist" className="mb-4"/></a>
              <p className="text-lg font-semibold">Gastroenterologist</p>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Home;
