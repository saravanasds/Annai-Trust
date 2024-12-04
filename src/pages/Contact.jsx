import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Img from '../assets/donate-bg.jpg'; // Banner image path
import axios from 'axios';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://annai-backend.onrender.com/api/admin/addMessage', formData);
      if (response.status === 201) {
        alert('Thank you for your Messaging!');
        setSuccessMessage('Thank you for your Messaging!');
        setFormData({ name: '', email: '', message: '' });
        window.location.reload();
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div>
      <Helmet>
        <title>Contact Us - Annai Educational Trust</title>
        <meta name="description" content="Get in touch with Annai Educational Trust to learn more about our mission and services." />
      </Helmet>

      {/* Banner Section */}
      <section className="relative min-h-[50vh] flex justify-center items-center bg-gray-200">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${Img})` }}>
          <div className="bg-black bg-opacity-60 w-full h-full flex flex-col justify-center items-center p-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">Contact Annai Educational Trust</h1>
            <p className="mt-4 text-lg text-white text-center">We are here to answer any questions you may have about our trust and services.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gray-100">
        {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}
        {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}
        <div className="container mx-auto px-4 md:flex md:space-x-8">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 bg-white p-6 shadow-lg rounded-lg mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-600 font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
                  placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 font-medium mb-2">Message</label>
                <textarea
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500" rows="5"
                  placeholder="Your Message">
                </textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition">
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
              <div className="w-full h-64 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.631993977541!2d77.51622437451344!3d10.450748865117585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9de6360313ee1%3A0x420bd092b0aab17f!2sAnnai%20Educational%20Trust!5e0!3m2!1sen!2sin!4v1732617140667!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
