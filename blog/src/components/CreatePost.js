import React, { useContext, useState } from 'react';
import { UserContext } from '../UserContext';

const CreatePost = ({ addPost }) => {
  const { user } = useContext(UserContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content, id: Date.now(), comments: [] });
    setTitle('');
    setContent('');
  };

  if (!user) {
    return <p>Please log in to create a post.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePost;
