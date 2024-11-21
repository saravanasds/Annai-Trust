import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import Img from '../assets/slider1.jpg';
import Logo from '../assets/TRUSTLOGO.png'; // Dummy logo image

function Footer() {
  return (
    <footer className="relative bg-gray-900 text-gray-300 py-16 overflow-hidden min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${Img})` }}
      ></div>

      {/* Wave SVG */}
      <svg
        className="absolute bottom-0 w-full text-gray-500  transform rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path
          d="M851.8,100c125,0,288.3-45,348.2-64V0H0v44c3.7-1,7.3-1.9,11-2.9C80.7,22,151.7,10.8,223.5,6.3C276.7,2.9,330,4,383,9.8c52.2,5.7,103.3,16.2,153.4,32.8C623.9,71.3,726.8,100,851.8,100z"
          fill="currentColor"
        />
      </svg>

      {/* Overlay */}
      <div className="absolute inset-5 rounded-lg bg-black opacity-50"></div>

      {/* Footer Content */}
      <div className="relative container mx-auto px-6 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
  {/* Logo Section */}
  <div className="flex flex-col items-center justify-center space-y-4" data-aos="fade-up">
    <Link to="/" className="flex flex-col items-center space-y-3 group">
      {/* Logo Image with Group Hover Effect */}
      <img
        src={Logo}
        alt="Annai Trust Logo"
        className="w-24 h-24 group-hover:scale-125 transition-transform duration-300"
      />
      {/* Text will also scale when logo is hovered */}
      <span className="text-xl text-center font-bold group-hover:text-blue-500 transition-all duration-300">
        Annai Educational Trust
      </span>
    </Link>
    <p className="text-sm leading-relaxed text-center">
      Empowering communities through education and support. Join us in making a difference.
    </p>
  </div>

  {/* About Us Section */}
  <div className="flex flex-col items-center md:pt-10" data-aos="fade-up" data-aos-delay="100">
    <h2 className="text-xl font-semibold mb-4 text-center text-blue-500">Quick Links</h2>
    <ul className="space-y-2 text-md ">
      <li>
        <Link to="/mission" className="hover:text-white transition">
          Home
        </Link>
      </li>
      <li>
        <Link to="/vision" className="hover:text-white transition">
          Who we are
        </Link>
      </li>
      <li>
        <Link to="/team" className="hover:text-white transition">
          What we do
        </Link>
      </li>
      <li>
        <Link to="/team" className="hover:text-white transition">
          Contact us
        </Link>
      </li>
    </ul>
  </div>

  {/* Programs Section */}
  <div className="flex flex-col items-center md:pt-10" data-aos="fade-up" data-aos-delay="200">
    <h2 className="text-xl font-semibold mb-4 text-center text-blue-500">Our Services</h2>
    <ul className="space-y-2 text-md ">
      <li>
        <Link to="/education" className="hover:text-white transition">
          Education Support
        </Link>
      </li>
      <li>
        <Link to="/health" className="hover:text-white transition">
          Health & Shelter
        </Link>
      </li>
      <li>
        <Link to="/community" className="hover:text-white transition">
          Blood Camp
        </Link>
      </li>
    </ul>
  </div>

  {/* Resources Section */}
  <div className="flex flex-col items-center md:pt-10" data-aos="fade-up" data-aos-delay="300">
    <h2 className="text-xl font-semibold mb-4 text-center text-blue-500">Resources</h2>
    <ul className="space-y-2 text-md">
      <li>
        <Link to="/blog" className="hover:text-white transition">
          Blog
        </Link>
      </li>
      <li>
        <Link to="/events" className="hover:text-white transition">
          Events
        </Link>
      </li>
      <li>
        <Link to="/gallery" className="hover:text-white transition">
          Gallery
        </Link>
      </li>
    </ul>
  </div>

  {/* Get Involved Section */}
  <div className="flex flex-col items-center md:pt-10" data-aos="fade-up" data-aos-delay="400">
    <h2 className="text-xl font-semibold mb-4 text-center text-blue-500">Get Involved</h2>
    <ul className="space-y-2 text-md">
      <li>
        <Link to="/donate" className="hover:text-white transition">
          Donate
        </Link>
      </li>
      <li>
        <Link to="/volunteer" className="hover:text-white transition">
          Volunteer
        </Link>
      </li>
      <li>
        <Link to="/contact" className="hover:text-white transition">
          Contact Us
        </Link>
      </li>
    </ul>
  </div>
</div>


        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Additional Contact Information */}
        <div className="lg:flex lg:justify-between items-center mt-10 space-y-6 lg:space-y-0">
          {/* Connect With Us */}
          <div data-aos="fade-up" data-aos-delay="500">
            <h2 className="text-lg font-semibold">Connect With Us</h2>
            <p className="text-sm">Have questions? Reach out to us anytime.</p>
            <Link to="/contact" className="text-blue-400 hover:text-blue-500 text-sm">
              Get in Touch
            </Link>
          </div>

          {/* Call Us */}
          <div data-aos="fade-up" data-aos-delay="600">
            <h2 className="text-lg font-semibold">Call Us</h2>
            <p className="text-blue-400 hover:text-blue-500">
              <a href="tel:0124-64XXXX"><span>+91 9865826446</span></a>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-6 mt-4 lg:mt-0" data-aos="fade-up" data-aos-delay="700">
            <Link to="https://www.linkedin.com/annaitrust" target="_blank" className="hover:text-blue-500">
              <FaLinkedin className="w-6 h-6" />
            </Link>
            <Link to="https://www.twitter.com/annaitrust" target="_blank" className="hover:text-blue-400">
              <FaTwitter className="w-6 h-6" />
            </Link>
            <Link to="https://www.facebook.com/annaitrust" target="_blank" className="hover:text-blue-600">
              <FaFacebook className="w-6 h-6" />
            </Link>
            <Link to="https://www.instagram.com/annaitrust" target="_blank" className="hover:text-pink-500">
              <FaInstagram className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
