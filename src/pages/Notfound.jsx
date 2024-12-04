import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center not-found">
      <h1 className='text-2xl font-bold tracking-wider mb-4'>404 - Page Not Found</h1>
      <p className='mb-2'>Oops! The page you are looking for does not exist.</p>
      <Link to="/" className='border border-gray-500 px-4 py-1 rounded-md'>Go back to the Home Page</Link>
    </div>
  );
};

export default NotFound;
