import React from 'react';
import { Link } from 'react-router-dom';

import Img from "../../assets/slider2.jpg"

const ImpactSection = () => {
  return (
    <section
      className="impacts py-16 text-white relative bg-cover bg-fixed bg-center"
      data-aos="fade-up"
      style={{
        backgroundImage: `url(${Img})`, // Add your background image path here
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="container mx-auto max-w-[80%] relative z-10 text-center">
        {/* Main Impact Heading */}
        <h2 className="text-3xl font-bold">Our Impact</h2>
        <p className="mt-4 text-lg">
          Making a difference in our community with our dedicated services.
        </p>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <div className="impact-card p-6 mx-6 bg-gray-200 bg-opacity-80 rounded-lg shadow-md" data-aos="flip-left">
            <h3 className="text-2xl font-semibold">500+ Nursing Graduates</h3>
            <p className="mt-2">Empowering healthcare professionals since our inception.</p>
          </div>
          <div className="impact-card p-6 mx-6 bg-gray-200 bg-opacity-80 rounded-lg shadow-md" data-aos="flip-up">
            <h3 className="text-2xl font-semibold">3000+ Blood Donations</h3>
            <p className="mt-2">Supporting life-saving blood donations in our community.</p>
          </div>
          <div className="impact-card p-6 mx-6 bg-gray-200 bg-opacity-80 rounded-lg shadow-md" data-aos="flip-right">
            <h3 className="text-2xl font-semibold">200+ Paramedical Students</h3>
            <p className="mt-2">Training future healthcare experts for community service.</p>
          </div>
        </div>

        {/* Other Programs Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Our Other Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div
              className="program-card bg-gray-100 bg-opacity-90 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
            >
              <img
                src="/images/vocational-training.jpg"
                alt="Vocational Training"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">Vocational Training</h3>
                <p className="mt-2">Providing skill-based training to empower the underprivileged.</p>
                <Link to="/vocational-training">
                  <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="program-card bg-gray-100 bg-opacity-90 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
            >
              <img
                src="/images/shelter.jpg"
                alt="Shelter for Homeless"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">Shelter for Homeless</h3>
                <p className="mt-2">Offering a safe haven for the homeless and needy.</p>
                <Link to="/shelter">
                  <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="program-card bg-gray-100 bg-opacity-90 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
            >
              <img
                src="/images/annai-paramedical.jpg"
                alt="Annai Paramedical"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">Annai Paramedical</h3>
                <p className="mt-2">Dedicated to training the next generation of healthcare professionals.</p>
                <Link to="/annai-paramedical">
                  <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="program-card bg-gray-100 bg-opacity-90 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
            >
              <img
                src="/images/blood-bank.jpg"
                alt="Blood Bank"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold">Blood Bank</h3>
                <p className="mt-2">Ensuring a steady supply of blood for emergencies and surgeries.</p>
                <Link to="/blood-bank">
                  <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
