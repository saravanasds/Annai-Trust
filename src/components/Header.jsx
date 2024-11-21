import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Topbar from './Topbar';

function Header() {
  const [showHeader, setShowHeader] = useState(true); // Track header visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll position for Navbar background color
  const [showTopbar, setShowTopbar] = useState(true); // Track Topbar visibility

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const seventyFiveVh = window.innerHeight * 0.10; // Calculate 75% of the viewport height

    // Show or hide Topbar based on scroll position
    if (currentScrollY > seventyFiveVh) {
      setShowTopbar(false); // Hide Topbar when scrolled past 75vh
    } else {
      setShowTopbar(true); // Show Topbar when scrolled back to the top
    }

    // Change Navbar background color after scrolling 50px
    if (currentScrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Toggle header visibility based on scroll direction
    if (currentScrollY > lastScrollY) {
      setShowHeader(false); // Hide when scrolling down
    } else {
      setShowHeader(true); // Show when scrolling up
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-transform duration-500 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {showTopbar && <Topbar />} {/* Conditionally render the Topbar */}
      <div
        className={`transition-colors duration-300 ${
          isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'
        }`}
      >
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
