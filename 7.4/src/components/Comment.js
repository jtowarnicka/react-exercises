import React from 'react';

const Comment = (comment) => {
  return (
    <li key={comment.id}>
      {comment.email} {comment.name}
    </li>
  );
};

export default Comment;
