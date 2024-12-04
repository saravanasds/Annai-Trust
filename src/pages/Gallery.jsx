import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Img from "../assets/slider2.jpg";
import Banner from '../components/Banner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Hook to handle navigation

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://annai-backend.onrender.com/api/admin/getAllEvents');
        setEvents(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

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


      {/* Display Events */}
      <div className="w-[80%] mx-auto p-5 py-10">
        <h2 className="text-xl font-semibold text-white">Events</h2>
        {loading ? (
          <p>Loading events...</p>  // Display a loading message while events are being fetched
        ) : (
          <div className="mt-3 grid grid-cols-4 gap-5">
            {Array.isArray(events) && events.length > 0 ? (
              events.map((event) => (
                <div
                  key={event._id}
                  className="bg-white p-2 rounded shadow-md cursor-pointer"
                  onClick={() => navigate(`/eventImages/${event._id}`)} // Navigate to EventImages page
                >
                  <img src={event.thumbnail} alt={event.title} className="w-full h-48 object-cover" />
                  <h3 className="text-lg font-semibold py-2">{event.title}</h3>
                </div>
              ))
            ) : (
              <p>No events found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
