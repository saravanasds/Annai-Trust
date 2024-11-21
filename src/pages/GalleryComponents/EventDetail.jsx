import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { galleryData } from '../../data/galleryData';
import EventBanner from '../GalleryComponents/EventBanner';

const slugify = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const EventDetail = () => {
  const { eventTitle } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const selectedEvent = galleryData.find(
      (event) => slugify(event.title) === eventTitle
    );
    setEvent(selectedEvent);

    // Scroll to top when eventTitle changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [eventTitle]);

  if (!event) {
    return (
      <div className="flex justify-center items-center h-screen">Loading...</div>
    );
  }

  return (
    <div className="pt-10">
      {/* Event Banner */}
      <EventBanner
        backgroundImage={event.banner}
        title={event.title}
        eventName={event.title}
      />

      {/* Event Details */}
      <div className="container mx-auto p-6">
        <button
          className="mb-4 text-blue-500 hover:underline"
          onClick={() => {
            navigate(`/gallery`);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          &larr; Back to Gallery
        </button>

        <h2 className="text-3xl font-bold mb-4">{event.title}</h2>
        <p className="mt-4 text-lg">{event.description}</p>

        {/* Event Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {event.images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Event ${index}`}
              className="w-full h-56 object-cover rounded-lg shadow-sm hover:shadow-lg transition"
            />
          ))}
        </div>

        {/* Related Events */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">Related Events</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryData
              .filter((relatedEvent) => relatedEvent.id !== event.id)
              .slice(0, 3)
              .map((relatedEvent) => (
                <Link
                  to={`/gallery/${slugify(relatedEvent.title)}`}
                  key={relatedEvent.id}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="group"
                >
                  <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                    <img
                      src={relatedEvent.banner}
                      alt={relatedEvent.title}
                      className="w-full h-56 object-cover group-hover:opacity-80 group-hover:grayscale-0 transition duration-300"
                      loading="lazy"
                    />
                    <div className="p-4 bg-white">
                      <h3 className="text-xl font-semibold text-gray-800 truncate">
                        {relatedEvent.title}
                      </h3>
                      <p className="text-gray-600 mt-2 line-clamp-2">
                        {relatedEvent.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
