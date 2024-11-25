import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import Img from '../assets/slider2.jpg';
import Banner from '../components/Banner';
import FounderImg from '../assets/founder.png'; // Add the founder's image path

const About = () => {
  return (
    <div className="bg-gray-50">
      <Helmet>
        <title>About Us - Annai Educational Trust</title>
        <meta
          name="description"
          content="Learn more about Annai Educational Trust, our mission to empower through education, and our impact on communities."
        />
        <meta
          name="keywords"
          content="Annai Educational Trust, Education, Empowerment, Community Support"
        />
      </Helmet>

      {/* Banner Section */}
      <Banner
        backgroundImage={Img}
        title="About Annai Educational Trust"
        subtitle="Empowering individuals through quality education and community support."
        currentPage="About Us"
      />

      {/* Our Mission Section */}
      <section className="flex justify-center items-center bg-white py-16 px-4">
        <div className="max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At Annai Educational Trust, our mission is to empower underserved
            communities through access to quality education and skill
            development programs. We believe in creating lasting change by
            equipping individuals with the tools they need to succeed.
          </p>
          <Link
            to="/services"
            className="mt-8 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Explore Our Courses
          </Link>
        </div>
      </section>

      {/* Founder Section */}
      <section className="flex flex-col items-center bg-gray-50 py-16 px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Meet Our Visionary Founder</h2>
        <div className="flex flex-col md:flex-row items-center max-w-6xl">
          <img
            src={FounderImg}
            alt="Founder"
            className="w-48 h-48 rounded-full object-cover mb-6 md:mb-0 md:mr-8 shadow-lg"
          />
          <div className="text-lg text-gray-700 leading-relaxed">
            <p>
              Our founder,{' '}
              <span className="font-bold text-gray-900">K.Ravichandran</span>,
              believes in the transformative power of education. With a lifelong
              commitment to social justice, he has been instrumental in
              empowering communities through access to resources, mentorship,
              and advocacy.
            </p>
            <blockquote className="mt-4 text-blue-600 italic">
              "Education is not just a tool—it’s a foundation for dignity and
              hope."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-white py-16 px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Team</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((member, index) => (
            <div
              key={index}
              className="text-center bg-gray-100 rounded-lg shadow-md p-6"
            >
              <div className="w-24 h-24 bg-gray-300 mx-auto rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-700">Team Member {member}</h3>
              <p className="text-gray-500">Role / Position</p>
            </div>
          ))}
        </div>
      </section>

      {/* History Section */}
      <section className="bg-gray-50 py-16 px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Our History</h2>
        <div className="max-w-4xl mx-auto text-center text-lg text-gray-600 leading-relaxed">
          <p className="mb-6">
            Since our establishment, Annai Educational Trust has organized
            numerous impactful events:
          </p>
          <ul className="list-disc list-inside text-left mx-auto">
            <li>Blood donation camps that have saved countless lives.</li>
            <li>Shelter initiatives for homeless individuals and families.</li>
            <li>Vocational training centers for skill development.</li>
            <li>
              Annai Paramedical - A program providing healthcare education and
              resources.
            </li>
          </ul>
        </div>
      </section>

      {/* Registration Section */}
      <section className="bg-white py-16 px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Registration & Volunteering
        </h2>
        <div className="max-w-4xl mx-auto text-center text-lg text-gray-600">
          <p className="mb-6">
            If you’d like to join our mission, please provide the following
            details for registration and volunteer opportunities:
          </p>
          <ul className="list-disc list-inside text-left mx-auto">
            <li>Full Name</li>
            <li>Contact Information (Phone & Email)</li>
            <li>Availability and Skills</li>
            <li>Preferred Areas of Contribution</li>
          </ul>
          <Link
            to="/register"
            className="mt-8 inline-block bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Register Now
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Contribute to Our Cause</h2>
          <p className="mb-8">
            Your support helps us continue our mission of empowering communities
            and changing lives. Any contribution, big or small, makes a
            difference.
          </p>
          <Link
            to="/donate"
            className="bg-yellow-500 text-gray-900 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Donate Now
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default About;
