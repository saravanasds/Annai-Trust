import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import Img from "../assets/slider2.jpg";
import Banner from '../components/Banner';
import FounderImg from "../assets/founder.png"; // Add the founder's image path

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us - Annai Educational Trust</title>
        <meta name="description" content="Learn more about Annai Educational Trust, our mission to empower through education, and our impact on communities." />
        <meta name="keywords" content="Annai Educational Trust, Education, Empowerment, Community Support" />
      </Helmet>

      {/* Banner Section with Breadcrumbs */}
{/* Reusable Banner Component */}
<Banner
        backgroundImage={Img}
        title="About Annai Educational Trust"
        subtitle="Empowering individuals through quality education and community support."
        currentPage="About Us"
      />

      {/* Content Section - Our Mission */}
      <section className="min-h-[40vh] flex justify-center items-center bg-gray-100 py-12">
        <div className="max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600">
            At Annai Educational Trust, our mission is to empower underserved communities through access to quality education and skill development programs. We believe in creating lasting change by equipping individuals with the tools they need to succeed.
          </p>
          <Link to="/services" className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-500 transition">
            Explore Our Courses
          </Link>
        </div>
      </section>

      {/* Founder Section */}
      <section className="min-h-[40vh] flex flex-col items-center bg-gray-50 py-12">
  <h2 className="text-3xl font-semibold text-gray-800 mb-8">Meet Our Visionary Founder</h2>
  <div className="flex flex-col md:flex-row items-center max-w-6xl px-6">
    <img src={FounderImg} alt="Founder" className="w-56 h-56 rounded-full object-cover mb-6 md:mb-0 md:mr-8 shadow-lg" />
    <div className="text-lg text-gray-700 leading-relaxed">
      <p>
        Our founder, <span className="font-bold text-gray-900">K.Ravichandran</span>, believes in the transformative power of education. With a lifelong commitment to social justice, he has been instrumental in empowering communities through access to resources, mentorship, and advocacy. 
      </p>
      <blockquote className="mt-4 text-blue-600 italic">
        "Education is not just a tool—it’s a foundation for dignity and hope."
      </blockquote>
    </div>
  </div>
</section>


      {/* Our Team Section */}
      <section className="min-h-[40vh] bg-white py-12">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our Team</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {[1, 2, 3].map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 bg-gray-300 mx-auto rounded-full mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-700">Team Member {member}</h3>
              <p className="text-gray-500">Role / Position</p>
            </div>
          ))}
        </div>
      </section>

      {/* History Section */}
      <section className="min-h-[40vh] bg-gray-100 py-12">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Our History</h2>
        <div className="max-w-4xl px-4 text-gray-600 space-y-6">
          <p>Since our establishment, Annai Educational Trust has organized numerous impactful events:</p>
          <ul className="list-disc list-inside">
            <li>Blood donation camps that have saved countless lives.</li>
            <li>Shelter initiatives for homeless individuals and families.</li>
            <li>Vocational training centers for skill development.</li>
            <li>Annai Paramedical - A program providing healthcare education and resources.</li>
          </ul>
        </div>
      </section>

      {/* Registration Section */}
      <section className="min-h-[40vh] bg-white py-12">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Registration & Volunteering</h2>
        <div className="max-w-4xl px-4 text-center text-lg text-gray-600">
          <p>If you’d like to join our mission, please provide the following details for registration and volunteer opportunities:</p>
          <ul className="list-disc list-inside text-left mt-4">
            <li>Full Name</li>
            <li>Contact Information (Phone & Email)</li>
            <li>Availability and Skills</li>
            <li>Preferred Areas of Contribution</li>
          </ul>
          <Link to="/register" className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-500 transition">
            Register Now
          </Link>
        </div>
      </section>

      {/* Footer Section with Donate Button */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Contribute to Our Cause</h2>
          <p className="mb-6">Your support helps us continue our mission of empowering communities and changing lives. Any contribution, big or small, makes a difference.</p>
          <Link to="/donate" className="bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg font-semibold hover:bg-yellow-400 transition">
            Donate Now
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default About;
