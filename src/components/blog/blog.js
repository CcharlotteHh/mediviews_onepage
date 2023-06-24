import React, { useEffect, useState } from 'react';
import axios from 'axios';
const MedicalBlogs = () => {
    const [blogs, setBlogs] = useState([]);

    // Fetch blogs and update the state
    useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const response = await axios.get('https://mediviews.nl/');
          // Extract the blog posts from the response data
          const extractedBlogs = response.data;
          setBlogs(extractedBlogs);
        } catch (error) {
          console.error('Error fetching blogs:', error);
        }
      };

      fetchBlogs();
    }, []);

    return (
      <div>
        {/* Display the blogs */}
        {blogs.map((blog, index) => (
          <div key={index}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
    );
  };

  export default MedicalBlogs;