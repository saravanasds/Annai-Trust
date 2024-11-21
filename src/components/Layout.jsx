import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden'>
      <Header />
      <main className='flex-grow h-auto pt-20  min-h-screen' data-aos="fade-up">
        <Outlet />
      </main>
      <Footer />
      {/* Including the ScrollToTopButton */}
      <ScrollToTopButton />
    </div>
  );
};

export default Layout;
