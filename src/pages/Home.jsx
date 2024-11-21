import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './HomeComponents/Hero';
import About from '../assets/slider2.jpg';
import GetInvolvedSection from "../pages/HomeComponents/GetInvolvedSection"
import ImpactSection from "../pages/HomeComponents/ImpactSection"

import CountUp from 'react-countup';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Home - Annai Educational Trust</title>
        <meta
          name="description"
          content="Annai Educational Trust supports community health with Nursing, Paramedical, and Blood Donation services."
        />
      </Helmet>

      {/* Main H1 for SEO */}
      <h1 className="sr-only">Annai Educational Trust - Nursing, Paramedical, and Blood Donation Services</h1>

      {/* Hero Section with Parallax Effect */}
      <Hero />

      {/* About Us Section */}
      <section className="about-us py-16 bg-gray-100" data-aos="fade-up">
        <div className="container mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center gap-10">
            <div className="md:w-1/2 w-full" data-aos="zoom-in">
              <img
                src={About}
                alt="About Annai Educational Trust"
                className="w-full h-auto shadow-lg "
              />
            </div>
            <div className="md:w-1/2 w-full text-center md:text-left" data-aos="fade-left">
              <h2 className="text-4xl font-bold text-blue-600">Welcome to Annai Educational Trust</h2>
              <p className="mt-6 text-xl text-gray-700 leading-relaxed">
                At Annai Educational Trust, we are dedicated to enhancing community health by providing comprehensive education in Nursing, Paramedical studies, and community services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Counters Section */}
      <section className="counters py-16 bg-white text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold">Our Achievements</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="counter-card">
            <h3 className="text-4xl font-bold text-blue-600">
              <CountUp end={500} duration={2} />+
            </h3>
            <p className="mt-2">Nursing Graduates</p>
          </div>
          <div className="counter-card">
            <h3 className="text-4xl font-bold text-blue-600">
              <CountUp end={3000} duration={2} />+
            </h3>
            <p className="mt-2">Blood Donations</p>
          </div>
          <div className="counter-card">
            <h3 className="text-4xl font-bold text-blue-600">
              <CountUp end={200} duration={2} />+
            </h3>
            <p className="mt-2">Paramedical Students</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Carousel */}
      {/* <section className="testimonials py-16 bg-gray-100" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">What People Say</h2>
          <div className="carousel mt-8">
            <div className="testimonial-card">
              <FaQuoteLeft className="text-blue-600 text-2xl" />
              <p className="mt-4 text-lg">The best trust for nursing education and community health services.</p>
              <FaQuoteRight className="text-blue-600 text-2xl mt-4" />
              <h4 className="mt-4 font-semibold">- John Doe</h4>
            </div>
          </div>
        </div>
      </section> */}

      {/* Courses Section with Filters */}
      <section className="courses py-16 bg-white" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Our Programs</h2>
          <p className="mt-4 text-lg">Join our programs in Nursing, Paramedical studies, and Blood Donation training.</p>
          {/* Add filters here */}
        </div>
      </section>

      {/* CTA Section */}
        <GetInvolvedSection />


      {/* Upcoming Events Section */}
      <section className="events py-16 bg-gray-100" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Upcoming Events</h2>
          <p className="mt-4 text-lg">Check out our upcoming community and educational events.</p>
        </div>
      </section>


      {/* New Impacts Section */}
        <ImpactSection />

      {/* Volunteer Section */}
      <section className="volunteer py-16 bg-gray-600 text-white text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold">Join Us as a Volunteer</h2>
        <p className="mt-4 text-lg">Help us make a positive impact in the community. Your time and skills can make a difference.</p>
        <button className="mt-6 bg-white text-blue-600 font-semibold py-3 px-6 rounded hover:bg-gray-100" data-aos="zoom-in">
          Get Involved
        </button>
      </section>






      {/* Footer Section */}
      {/* <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Annai Educational Trust. All Rights Reserved.</p>
        </div>
      </footer> */}
    </div>
  );
};

export default Home;
