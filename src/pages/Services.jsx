import React from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../components/Banner';
import Img from "../assets/slider2.jpg";

function Services() {
  return (
    <div className="services-page">
      {/* SEO Optimization */}
      <Helmet>
        <title>Our Services - Annai Educational Trust</title>
        <meta
          name="description"
          content="Explore the diverse range of services offered by Annai Educational Trust, including Vocational Training, Shelter for the Homeless, Para Medical Services, and a Blood Bank."
        />
        <meta name="keywords" content="Vocational Training, Shelter, Para Medical, Blood Bank, Annai Educational Trust" />
      </Helmet>

      {/* Banner Section */}
      {/* Reusable Banner Component */}
      <Banner
        backgroundImage={Img}
        title="Our Services"
        subtitle="Empowering Communities with Compassion and Care"
        currentPage="Services"
      />

      {/* Vocational Training Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
          <div className="md:w-1/2">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Vocational Training"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Vocational Training</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our vocational training programs empower individuals with essential skills in various trades, enabling them to secure sustainable employment. Courses include tailoring, computer skills, electrical work, and more, ensuring participants gain practical knowledge.
            </p>
          </div>
        </div>
      </section>

      {/* Shelter for Homeless Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 px-6">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Shelter for Homeless People</h2>
            <p className="text-lg text-gray-700 mb-6">
              We provide a safe haven for homeless individuals, offering not just shelter but also support services like food, clothing, and healthcare. Our mission is to restore dignity and hope to those in need.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Shelter for Homeless"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Annai Para Medical Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
          <div className="md:w-1/2">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Annai Para Medical"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Annai Para Medical</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our Para Medical services provide critical healthcare support in underprivileged areas. With trained professionals, we offer first aid, basic medical assistance, and health camps to promote community well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Blood Bank Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 px-6">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">Blood Bank</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our Blood Bank initiative is dedicated to saving lives by maintaining a steady supply of blood for emergencies. We organize regular blood donation camps and collaborate with hospitals to meet urgent blood requirements.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Blood Bank"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-blue-700 text-white py-10 text-center">
        <h3 className="text-2xl font-semibold">Get Involved</h3>
        <p className="mt-4">Support our mission to make a positive impact. Your contribution matters!</p>
        <button className="bg-white text-blue-700 font-semibold mt-6 py-2 px-8 rounded-full hover:bg-gray-200">
          Donate Now
        </button>
      </div>
    </div>
  );
}

export default Services;
