import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import { ImSpinner9 } from 'react-icons/im';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

// Lazy load each page component
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogComponents/BlogPost'));
const Gallery = React.lazy(() => import('./pages/Gallery'));
const EventDetail = React.lazy(() => import('./pages/GalleryComponents/EventDetail'));
const Donation = React.lazy(() => import('./pages/Donation'));
const NotFound = React.lazy(() => import('./pages/Notfound'));


const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);


  return (
    <Router>
      <Suspense fallback={<div className="flex justify-center items-center h-screen"><ImSpinner9 className="animate-spin text-4xl" /></div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="blog" element={<Blog />} />
            <Route path="/blog/:blogTitle" element={<BlogPost />} />
            <Route path="gallery" element={<Gallery />} />

            {/* Dynamic route for individual event pages */}
            <Route path="gallery/:eventTitle" element={<EventDetail />} />
            <Route path="donation" element={<Donation />} />
            <Route path="*" element={<NotFound />} />
          
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
