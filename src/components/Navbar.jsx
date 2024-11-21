import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaBarsStaggered, FaAnglesLeft } from "react-icons/fa6";
import Logo from "../assets/TRUSTLOGO.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const activeLinkClass = "bg-blue-600 text-white";
  const defaultLinkClass = "font-bold hover:text-blue-500 ";

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0); // Check if not at the top
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-200 text-black py-2 shadow-lg' : 'bg-white text-gray-800 py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center" aria-label="Home">
          <img
            src={Logo}
            alt="Logo"
            className={`w-12 h-12 rounded-full mr-2 ${
              isScrolled ? 'w-10 h-10' : 'w-12 h-12'
            }`}
          />
          <span
            className={`font-bold ${
              isScrolled ? 'text-lg md:text-2xl' : 'text-xl md:text-3xl'
            }`}
          >
            Annai Educational Trust
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-6 ">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded ${isActive ? activeLinkClass : defaultLinkClass}`
              }
              onClick={handleScrollToTop}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 rounded ${isActive ? activeLinkClass : defaultLinkClass}`
              }
              onClick={handleScrollToTop}
            >
              Who we are
            </NavLink>
          </li>
          <li
            className="relative"
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}
          >
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `px-3 py-2 rounded ${isActive ? activeLinkClass : defaultLinkClass}`
              }
              onClick={handleScrollToTop}
            >
              What we do
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `px-3 py-2 rounded ${isActive ? activeLinkClass : defaultLinkClass}`
              }
              onClick={handleScrollToTop}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `px-3 py-2 rounded ${isActive ? activeLinkClass : defaultLinkClass}`
              }
              onClick={handleScrollToTop}
            >
              Gallery
            </NavLink>
          </li>
          <li>
          <NavLink
      to="/contact"
      className="hidden md:block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium px-6 py-2 rounded-full transition-transform duration-300 hover:from-purple-600 hover:to-blue-600 hover:scale-105 shadow-lg"
      onClick={handleScrollToTop}
    >
      Contact
    </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaBarsStaggered /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
  className={`absolute md:hidden inset-0 z-50 w-[60%] h-[90vh] bg-gray-800 bg-opacity-70 backdrop-blur-sm border-l border-gray-300 transform ${
    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
  } transition-transform duration-300 shadow-xl`}
>
         <button
          className="absolute top-4 right-4 p-1 rounded-full bg-white text-black"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <FaAnglesLeft className="text-xl" />
        </button>
        <ul className="flex flex-col items-center text-white font-bold mt-16 space-y-6">
        <img
            src={Logo}
            alt="Logo"
            className="w-20 h-20 rounded-full shadow-md mb-4"
          />
          <li>
            <NavLink
              to="/"
              className="hover:bg-gray-600 hover:text-black px-4 py-2 rounded"
              onClick={handleScrollToTop}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="hover:bg-gray-600 hover:text-black px-4 py-2 rounded"
              onClick={closeMenu}
            >
              Who we are
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className="hover:bg-gray-600 hover:text-black px-4 py-2 rounded"
              onClick={closeMenu}
            >
              What we do
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className="hover:bg-gray-600 hover:text-black px-4 py-2 rounded"
              onClick={closeMenu}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              className="hover:bg-gray-600 hover:text-black px-4 py-2 rounded"
              onClick={closeMenu}
            >
              Gallery
            </NavLink>
          </li>
          <li>
              <NavLink
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-teal-500 text-white font-medium px-6 py-2 rounded-full shadow-lg"
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          {/* Donate Button */}
<div className="absolute inset-x-0 bottom-4 flex justify-center">
  <NavLink
    to="/donate"
    className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold px-6 py-3 rounded-full shadow-md transition-transform duration-300 hover:from-orange-500 hover:to-yellow-500 hover:scale-105"
    onClick={closeMenu}
  >
    Donate
  </NavLink>
</div>

      </div>
    </nav>
  );
};

export default Navbar;
