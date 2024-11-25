import React from "react";
import { Link } from "react-router-dom";
import Img from "../../assets/slider2.jpg";

import ServiceImg1 from "../../assets/vocational-training.jpg"
import ServiceImg2 from "../../assets/shelter.jpg"
import ServiceImg3 from "../../assets/annai-paramedical.jpg"
import ServiceImg4 from "../../assets/blood-bank.jpg"

const ImpactSection = () => {
  return (
    <section
      className="impacts py-16 text-white relative bg-cover bg-fixed bg-center"
      data-aos="fade-up"
      style={{
        backgroundImage: `url(${Img})`,
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      <div className="container mx-auto max-w-[80%] relative z-10 text-center">
        {/* Main Impact Heading */}
        <h2 className="text-4xl font-bold uppercase">Our Impact</h2>
        <p className="mt-4 text-lg text-gray-300">
          Making a difference in our community with dedicated services and
          initiatives.
        </p>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <div
            className="impact-card group relative p-8 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            data-aos="flip-left"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 rounded-lg transition duration-300"></div>
            <h3 className="text-3xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
              500+ Nursing Graduates
            </h3>
            <p className="mt-4 text-gray-600 group-hover:text-gray-800 transition">
              Empowering healthcare professionals since our inception.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="impact-card group relative p-8 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            data-aos="flip-up"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 rounded-lg transition duration-300"></div>
            <h3 className="text-3xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
              3000+ Blood Donations
            </h3>
            <p className="mt-4 text-gray-600 group-hover:text-gray-800 transition">
              Supporting life-saving blood donations in our community.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="impact-card group relative p-8 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            data-aos="flip-right"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-10 rounded-lg transition duration-300"></div>
            <h3 className="text-3xl font-semibold text-gray-800 group-hover:text-blue-600 transition">
              200+ Paramedical Students
            </h3>
            <p className="mt-4 text-gray-600 group-hover:text-gray-800 transition">
              Training future healthcare experts for community service.
            </p>
          </div>
        </div>

        {/* Other Programs Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold mb-8 uppercase">Our Other Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div
              className="program-card group relative w-full h-80 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
            >
              <img
                src={ServiceImg1}
                alt="Vocational Training"
                className="w-full h-full object-cover group-hover:brightness-75 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:bg-black/50 transition duration-300"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <h3 className="text-2xl font-bold">Vocational Training</h3>
                <p className="mt-2 text-sm">
                  Providing skill-based training to empower the underprivileged.
                </p>
                <Link to="/vocational-training">
                  <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="program-card group relative w-full h-80 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
            >
              <img
                src={ServiceImg2}
                alt="Shelter for Homeless"
                className="w-full h-full object-cover group-hover:brightness-75 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:bg-black/50 transition duration-300"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                <h3 className="text-2xl font-bold">Shelter for Homeless</h3>
                <p className="mt-2 text-sm">
                  Offering a safe haven for the homeless and needy.
                </p>
                <Link to="/shelter">
                  <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            {/* Add more cards here if necessary */}

            {/* Card 3 */}
            <div
              className="program-card group relative w-full h-80 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
            >
              <img
                 src={ServiceImg3}
                alt="Annai Paramedical"
                className="w-full h-full object-cover group-hover:brightness-75 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:bg-black/50 transition duration-300"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
              <h3 className="text-2xl font-bold">Annai Paramedical</h3>
      <p className="mt-2 text-sm">
        Dedicated to training the next generation of healthcare professionals.
      </p>
      <Link to="/annai-paramedical">
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
          Learn More
        </button>
      </Link>

              </div>
            </div>

            {/* Card 4 */}
            <div
              className="program-card group relative w-full h-80 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              data-aos="fade-up"
            >
              <img
                  src={ServiceImg4}
                  alt="Blood Bank"
                className="w-full h-full object-cover group-hover:brightness-75 transition duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent group-hover:bg-black/50 transition duration-300"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white z-10">
              <h3 className="text-2xl font-bold">Blood Bank</h3>
      <p className="mt-2 text-sm">
        Ensuring a steady supply of blood for emergencies and surgeries.
      </p>
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
