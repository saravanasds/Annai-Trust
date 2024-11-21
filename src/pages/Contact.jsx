import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Img from '../assets/donate-bg.jpg'; // Banner image path

const Contact = () => {
  useEffect(() => {
    const initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('gmap_canvas'), {
        zoom: 14,
        center: new window.google.maps.LatLng(10.4571, 77.5182), // Coordinates for Palani
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
      });

      const marker = new window.google.maps.Marker({
        map,
        position: new window.google.maps.LatLng(10.4571, 77.5182),
      });

      const infowindow = new window.google.maps.InfoWindow({
        content: '<strong>Annai Educational Trust</strong><br>Palani, Tamil Nadu, India',
      });

      marker.addListener('click', () => {
        infowindow.open(map, marker);
      });

      infowindow.open(map, marker);
    };

    if (!window.google) {
      const script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp';
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  return (
    <div>
      <Helmet>
        <title>Contact Us - Annai Educational Trust</title>
        <meta name="description" content="Get in touch with Annai Educational Trust to learn more about our mission and services." />
      </Helmet>

      {/* Banner Section */}
      <section className="relative min-h-[50vh] flex justify-center items-center bg-gray-200">
        <div className="absolute inset-0 bg-cover bg-center"   style={{ backgroundImage: `url(${Img})` }}>
          <div className="bg-black bg-opacity-60 w-full h-full flex flex-col justify-center items-center p-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Contact Annai Educational Trust</h1>
            <p className="mt-4 text-lg text-white text-center">We are here to answer any questions you may have about our trust and services.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 md:flex md:space-x-8">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 bg-white p-6 shadow-lg rounded-lg mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-600 font-medium mb-2">Name</label>
                <input type="text" className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-medium mb-2">Email</label>
                <input type="email" className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-medium mb-2">Message</label>
                <textarea className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500" rows="5" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/2 flex flex-col justify-between bg-white p-6 shadow-lg rounded-lg">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Details</h2>
              <p className="text-gray-600 mb-6">Feel free to reach out to us through any of the following ways:</p>
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <FaMapMarkerAlt className="mr-3 text-blue-500" />
                  <span>Annai Educational Trust, Palani, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaPhoneAlt className="mr-3 text-blue-500" />
                  <span>+91 9865826446</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaEnvelope className="mr-3 text-blue-500" />
                  <span>info@annaieducationaltrust.org</span>
                </div>
              </div>
            </div>
            {/* Map Section */}
            <div className="mt-8 md:mt-0">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Location</h2>
              <div className="w-full h-64" id="gmap_canvas" style={{ overflow: 'hidden', borderRadius: '8px' }}></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
