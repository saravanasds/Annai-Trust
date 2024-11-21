import React, { useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import BannerImg from "../assets/slider3.jpg"

const Donation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    amount: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [activeFAQ, setActiveFAQ] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/donations', formData);
      if (response.status === 200) {
        setSuccessMessage('Thank you for your donation!');
        setFormData({ name: '', email: '', amount: '', message: '' });
      }
    } catch (error) {
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  const faqs = [
    {
      question: 'What is Annai Educational Trust?',
      answer: 'Annai Educational Trust is a non-profit organization focused on empowering communities through education and healthcare initiatives.',
    },
    {
      question: 'How will my donation be used?',
      answer: 'Your donation supports various projects including scholarships, healthcare camps, and community development programs.',
    },
    {
      question: 'Is my donation tax-deductible?',
      answer: 'Yes, donations to Annai Educational Trust are eligible for tax deductions under Section 80G.',
    },
    {
      question: 'How can I get a receipt?',
      answer: 'A donation receipt will be sent to your email after processing your donation.',
    },
  ];

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  return (
    <div className="donation-page py-10">
      <Helmet>
        <title>Donation - Annai Educational Trust</title>
        <meta name="description" content="Support Annai Educational Trust's mission by making a donation." />
      </Helmet>

{/* Banner Section */}
<div
  className="bg-blue-600 text-white py-20 text-center bg-cover bg-center relative"
  style={{ backgroundImage: `url("${BannerImg}")` }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  <div className="relative z-10">
    <h1 className="text-4xl font-bold">Support Our Mission</h1>
    <p className="mt-4">Your support makes a difference in the lives of many.</p>
  </div>
</div>


      {/* Donation Form Section */}
      <div className="max-w-5xl mx-auto p-8 flex flex-col md:flex-row gap-8 mt-10">
        <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-center">Make a Donation</h2>
          {successMessage && <p className="text-green-600 text-center">{successMessage}</p>}
          {errorMessage && <p className="text-red-600 text-center">{errorMessage}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                aria-label="Donor Name"
                required
                className="w-full border-gray-300 rounded p-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                aria-label="Email Address"
                required
                className="w-full border-gray-300 rounded p-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="amount" className="block font-semibold mb-1">Donation Amount ($)</label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                aria-label="Donation Amount"
                required
                min="1"
                className="w-full border-gray-300 rounded p-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block font-semibold mb-1">Message (Optional)</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                aria-label="Message"
                className="w-full border-gray-300 rounded p-2"
                rows="4"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold w-full hover:bg-blue-700"
            >
              Donate Now
            </button>
          </form>
        </div>

        {/* Donation Info Section */}
        <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold mb-4">Other Ways to Donate</h3>
          <div className="mb-6">
            <h4 className="font-semibold">Donate via UPI</h4>
            <img src="/path/to/qr-code.png" alt="UPI QR Code" className="w-32 h-32 mx-auto my-4" />
          </div>
          <div className="mb-6">
            <h4 className="font-semibold">Bank Transfer</h4>
            <p>Bank Name: XYZ Bank</p>
            <p>Account Number: 1234567890</p>
            <p>IFSC Code: XYZB0000123</p>
          </div>
          <div className="mt-6">
            <h4 className="font-semibold mb-2">Visit Us</h4>
            <iframe
              src="https://maps.google.com/maps?q=Palani&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="200"
              className="rounded-lg"
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg">
        <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4 border-b border-gray-200">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left font-semibold text-lg py-2 focus:outline-none"
            >
              {faq.question}
              <span
                className={`float-right transform transition-transform ${
                  activeFAQ === index ? 'rotate-180' : 'rotate-0'
                }`}
              >
                ▼
              </span>
            </button>
            {activeFAQ === index && <p className="mt-2 text-gray-700">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donation;
