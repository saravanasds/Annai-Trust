import React, { useState, useEffect } from 'react';
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
import axios from 'axios';


const Home = () => {
  const [upComingEvents, setUpComingEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);


  useEffect(() => {
    const fetchUpComingEvents = async () => {
      try {
        const response = await axios.get('https://annai-backend.onrender.com/api/admin/getAllUpComingEvent');
        setUpComingEvents(response.data);
      } catch (error) {
        console.error('Error fetching UpComing Events:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUpComingEvents();
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
      <section className="w-full p-16 bg-gray-100" data-aos="fade-up">
        <div className="w-full mx-auto">
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
          <p className="my-4 text-lg mb-8">Check out our upcoming community and educational events.</p>
          {/* Event List */}
          <div className="w-full py-10 border-t border-gray-500">
            <div className="w-[80%] mx-auto h-full">
              {loading ? (
                <p className="text-center text-gray-500">Loading events...</p>
              ) : upComingEvents.length === 0 ? (
                <p className="text-center text-gray-500">No events found.</p>
              ) : (
                upComingEvents.map((upComingEvent) => (
                  <div key={upComingEvent._id} className="w-full flex mb-6 shadow-sm shadow-black rounded-md bg-gray-200">

                    <div className="w-full my-6 px-10 pr-20 text-justify flex justify-between items-center">
                      <div>
                        <p className="text-xl font-bold">{upComingEvent.title}</p>
                        <p className="font-semibold text-gray-500">
                          {new Date(upComingEvent.date).toLocaleDateString("en-GB")}{" "}
                          {new Date(upComingEvent.date).toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
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
