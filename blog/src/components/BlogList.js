import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post-excerpt">
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <Link to={`/post/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
