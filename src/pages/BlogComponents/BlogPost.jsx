import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import BlogData from '../../data/blogData.js'; // Assuming you have a blog data file

const slugify = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const BlogPost = () => {
  const { blogTitle } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const selectedBlog = BlogData.find(
      (post) => slugify(post.title) === blogTitle
    );
    setBlog(selectedBlog);

    // Scroll to top when blogTitle changes
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [blogTitle]);

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen">Loading...</div>
    );
  }

  return (
    <div className="pt-10">
      {/* Blog Banner */}
      <div
        className="w-full h-[300px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${blog.banner})` }}
      >
        <h1 className="text-4xl font-bold text-white bg-black bg-opacity-50 p-4 rounded-lg">
          {blog.title}
        </h1>
      </div>

      {/* Blog Content */}
      <div className="container mx-auto p-6">
        <button
          className="mb-4 text-blue-500 hover:underline"
          onClick={() => {
            navigate(`/blog`);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          &larr; Back to Blog
        </button>

        <h2 className="text-3xl font-bold mb-4">{blog.title}</h2>
        <p className="text-gray-600 mb-6">{blog.date}</p>
        <p className="text-lg text-gray-800">{blog.content}</p>

        {/* Related Blog Posts */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">Related Blog Posts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {BlogData.filter((relatedPost) => relatedPost.id !== blog.id)
              .slice(0, 3)
              .map((relatedPost) => (
                <Link
                  to={`/blog/${slugify(relatedPost.title)}`} // Path updated to include slugified title
                  key={relatedPost.id}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="group"
                >
                  <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-56 object-cover group-hover:opacity-80 transition duration-300"
                      loading="lazy"
                    />
                    <div className="p-4 bg-white">
                      <h3 className="text-xl font-semibold text-gray-800 truncate">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 mt-2 line-clamp-2">
                        {relatedPost.excerpt}
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

export default BlogPost;
