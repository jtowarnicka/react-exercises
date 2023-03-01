import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentForm from './components/CommentForm';
import CommentsList from './components/CommentsList';
import './style.css';

// AXIOS WERSJA 0.20.0!!! -> axios@0.20.0

export default function App() {
  const [comments, setComments] = useState([]);

  const getComments = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/comments'
    );
    setComments(response.data);
  };

  useEffect(() => {
    getComments();
  }, []);

  const postComment = (data) => {
    axios
      .post('https://jsonplaceholder.typicode.com/comments', {
        name: data.name,
        email: data.email,
        body: data.body,
      })
      .then((res) => setComments((prev) => [...prev, res.data]));
  };

  return (
    <React.Fragment>
      <CommentForm postComment={postComment} />
      <CommentsList comments={comments} />
    </React.Fragment>
  );
}
