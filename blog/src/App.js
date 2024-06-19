import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserContext';
import Header from './components/Header';
import Login from './components/Login';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import CreatePost from './components/CreatePost';
import './App.css';

const App = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => setPosts([...posts, post]);
  const addComment = (postId, comment) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, comments: [...post.comments, comment] } : post
      )
    );
  };

  return (
    <UserProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<BlogList posts={posts} />} />
            <Route path="/post/:id" element={<BlogPost posts={posts} addComment={addComment} />} />
            <Route path="/create" element={<CreatePost addPost={addPost} />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
