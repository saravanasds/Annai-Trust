import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaTrashAlt } from "react-icons/fa";

const EventImages = () => {
    const { eventId } = useParams(); // Get event ID from URL
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEventImages = async () => {
            try {
                const response = await axios.get(`https://annai-backend.onrender.com/api/admin/getEventImages/${eventId}`);
                setImages(response.data.images); // Images directly from API
                setLoading(false);
            } catch (error) {
                console.error('Error fetching event images:', error);
                setLoading(false);
            }
        };

        fetchEventImages();
    }, [eventId]);

    return (
        <div className="w-[80%] mx-auto min-h-screen p-5 mt-[100px]">
            <h2 className="text-xl font-semibold text-gray-700">Event Images</h2>
            {loading ? (
                <p>Loading images...</p>
            ) : images.length > 0 ? (
                <div className="mt-3 grid grid-cols-4 gap-4">
                    {images.map((img, idx) => (
                        <div key={idx} className="relative">
                            <img
                                src={img} // Directly use the image URL
                                alt={`Event Image ${idx}`}
                                className="w-full h-48 object-cover rounded"
                            />
                        </div>
                    ))}
                </div>
            ) : (
                <p>No images found for this event.</p>
            )}
        </div>
    );
};

export default EventImages;
