import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { HiMail, HiPhone } from 'react-icons/hi';

function Topbar() {
  return (
    <div className="bg-gray-800 bg-opacity-90 backdrop-blur-lg border-l border-gray-300 text-white p-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 text-sm md:space-y-0">
        
        {/* Contact Info */}
        <div className="hidden md:flex flex-col md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0">
          <div className="flex items-center" aria-label="Email Contact">
            <HiMail className="mr-1" />
            <a href="mailto:annaiinstituts@gmail.com" className="hover:underline">
              annaiinstituts@gmail.com
            </a>
          </div>
          <div className="flex items-center" aria-label="Phone Contact">
            <HiPhone className="mr-1" />
            <span>+91 9865826446</span>
          </div>
        </div>

        {/* Social Media and Donation Link */}
        <div className="flex space-x-4 items-center">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-500">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="/donation" className="bg-orange-500 hover:bg-orange-700 px-3 py-1 rounded-lg text-white" aria-label="Donation Page">
            Donation
          </a>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
