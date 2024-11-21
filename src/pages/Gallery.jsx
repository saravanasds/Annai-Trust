import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Img from "../assets/slider2.jpg";
import Banner from '../components/Banner';
import { galleryData } from '../data/galleryData';

const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const Gallery = () => {
  return (
    <div>
      <Helmet>
        <title>Gallery - Annai Educational Trust</title>
        <meta name="description" content="Explore the gallery of Annai Educational Trust showcasing our events, activities, and community support programs." />
      </Helmet>

      <Banner
        backgroundImage={Img}
        title="Our Gallery"
        subtitle="Capturing moments of impact, empowerment, and community engagement."
        currentPage="Gallery"
      />

      <section className="min-h-[50vh] bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
          {galleryData.map(item => (
            <Link to={`/gallery/${slugify(item.title)}`} key={item.id} className="group">
              <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                <img
                  src={item.banner}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:opacity-80 group-hover:grayscale-0 transition duration-300"
                  loading="lazy"
                />
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-semibold text-gray-800 truncate">{item.title}</h3>
                  <p className="text-gray-600 mt-2 line-clamp-2">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
