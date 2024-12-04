import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Banner from '../components/Banner';
import BlogImg from '../assets/slider2.jpg'; // Your blog banner image
import axios from 'axios';

// Function to slugify the blog title
const slugify = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [upComingEvents, setUpComingEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState({}); // Tracks expanded blogs

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://annai-backend.onrender.com/api/admin/getAllBlogs');
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    const fetchUpComingEvents = async () => {
      try {
        const response = await axios.get('https://annai-backend.onrender.com/api/admin/getAllUpComingEvent');
        setUpComingEvents(response.data);
      } catch (error) {
        console.error('Error fetching UpComing Events:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUpComingEvents();
  }, []);

  const toggleExpand = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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

      {/* Blog List */}
      <div className="w-full my-20">
        <div className="w-[80%] h-full mx-auto">
          {loading ? (
            <p className="text-center text-gray-500">Loading blogs...</p>
          ) : blogs.length === 0 ? (
            <p className="text-center text-gray-500">No blogs found.</p>
          ) : (
            blogs.map((blog) => (
              <div key={blog._id} className="w-full flex mb-6 shadow-sm shadow-black rounded-sm bg-gray-100">
                <div className="w-[30%] p-2">
                  <img
                    src={blog.photo}
                    alt={blog.title}
                    className="w-[100%] h-72 object-cover border-2 border-white rounded-sm"
                  />
                </div>
                <div className="w-[70%] my-6 px-10 pr-20 text-justify">
                  <p className="text-xl font-bold">{blog.title}</p>
                  <p className="font-semibold text-gray-400">
                    {new Date(blog.date).toLocaleDateString("en-GB")}{" "}
                    {new Date(blog.date).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                    })}
                  </p>

                  <div className={`mt-4 ${expanded[blog._id] ? '' : 'line-clamp-4'}`}>
                    <p>{blog.content}</p>
                  </div>
                  <button
                    onClick={() => toggleExpand(blog._id)}
                    className="mt-2 text-blue-500 hover:underline"
                  >
                    {expanded[blog._id] ? 'Show Less' : 'Read More'}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Upcoming Events Section */}
      <section className="events py-16 bg-gray-100" data-aos="fade-up">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Upcoming Events</h2>
          <p className="my-4 text-lg mb-8">Check out our upcoming community and educational events.</p>
          {/* Event List */}
          <div className="w-full py-10 border-t border-gray-500">
            <div className="w-[80%] mx-auto h-full">
              {loading ? (
                <p className="text-center text-gray-500">Loading events...</p>
              ) : upComingEvents.length === 0 ? (
                <p className="text-center text-gray-500">No events found.</p>
              ) : (
                upComingEvents.map((upComingEvent) => (
                  <div key={upComingEvent._id} className="w-full flex mb-6 shadow-sm shadow-black rounded-md bg-gray-200">

                    <div className="w-full my-6 px-10 pr-20 text-justify flex justify-between items-center">
                      <div>
                        <p className="text-xl font-bold">{upComingEvent.title}</p>
                        <p className="font-semibold text-gray-500">
                          {new Date(upComingEvent.date).toLocaleDateString("en-GB")}{" "}
                          {new Date(upComingEvent.date).toLocaleTimeString("en-US", {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
