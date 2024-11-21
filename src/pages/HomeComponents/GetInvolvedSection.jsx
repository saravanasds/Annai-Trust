import React from 'react';
import { Link } from 'react-router-dom';
import Donate from '../../assets/donate-bg.jpg'; // Make sure to adjust the path to your background image


const GetInvolvedSection = () => {
  return (
    <section
      className="relative py-20 bg-blue-600 text-white text-center bg-cover bg-fixed bg-no-repeat bg-center"
      data-aos="fade-up"
      style={{
        backgroundImage: `url(${Donate})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 px-6">
        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
          Get Involved
        </h2>
        <p className="mt-6 text-lg sm:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed">
          Support our mission by donating or reaching out to us for more information.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {/* Donate Button with Routing */}
          <Link to="/donation">
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl transition duration-300">
              Donate
            </button>
          </Link>

          {/* Contact Us Button with Routing */}
          <Link to="/contact">
            <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
