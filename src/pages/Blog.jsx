import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';
import Banner from '../components/Banner';
// import Img from "../assets/slider2.jpg";
import BlogImg from '../assets/slider2.jpg'; // Your blog banner image
import BlogData from '../data/blogData.js'; // Assuming you have a data file for blog posts

// Function to slugify the blog title
const slugify = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const Blog = () => {
  return (
    <div>
      {/* Helmet for SEO */}
      <Helmet>
        <title>Our Blog - Annai Educational Trust</title>
        <meta name="description" content="Stay updated with the latest news, events, and insights from Annai Educational Trust." />
        <meta name="keywords" content="Annai Educational Trust Blog, Education, Community Support, Events" />
      </Helmet>

      {/* Reusable Banner Component */}
      <Banner
        backgroundImage={BlogImg}
        title="Our Blog"
        subtitle="Latest News, Events, and Educational Insights"
        currentPage="Blog"
      />

      {/* Blog Content Section */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Recent Articles</h2>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {BlogData.map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h3>
                  <p className="text-sm text-gray-500 flex items-center gap-2 mb-4">
                    <FaCalendarAlt /> {post.date}
                  </p>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog/${slugify(post.title)}`} // Link now uses slugified title
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="container mx-auto p-6 bg-gray-200 my-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Upcoming Events</h2>
        <ul className="space-y-4">
          <li className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold">Annual Fundraising Gala</h3>
            <p className="text-gray-600">
              Join us for our annual gala to support educational programs on December 1, 2024.
            </p>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold">Free Health Check-up Camp</h3>
            <p className="text-gray-600">
              A health camp for students and families on December 10, 2024.
            </p>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="font-bold">Skill Development Workshop</h3>
            <p className="text-gray-600">
              Enhancing skills for the youth on December 20, 2024.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Blog;
