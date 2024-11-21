import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const EventBanner = ({ backgroundImage, title, eventName }) => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center">
      {/* Background Image with Reduced Gray Filter */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: 'grayscale(40%)', // Reduced grayscale
        }}
      >
        {/* Black Gradient Overlay with Lower Opacity */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50" />
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-12">
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg shadow-black">
          {title}
        </h1>

        {/* Breadcrumb Navigation */}
        <nav className="mt-8 flex items-center space-x-3 text-white text-lg md:text-2xl font-semibold">
          <Link to="/" className="flex items-center hover:text-gray-400 transition duration-300">
            <FaHome className="mr-2" />
            <span className="underline">Home</span>
          </Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-100">Gallery</span>
          <span className="text-gray-400">/</span>
          <span className="text-gray-100">{eventName}</span>
        </nav>
      </div>
    </section>
  );
};

export default EventBanner;
