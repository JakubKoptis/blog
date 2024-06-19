import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../UserContext';

const BlogPost = ({ posts, addComment }) => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addComment(post.id, comment);
    setComment('');
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <h3>Comments</h3>
      {post.comments.map((c, index) => (
        <div key={index} className="comment">
          <p>{c}</p>
        </div>
      ))}
      {user && (
        <form onSubmit={handleSubmit}>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment"
          />
          <button type="submit">Add Comment</button>
        </form>
      )}
    </div>
  );
};

export default BlogPost;
