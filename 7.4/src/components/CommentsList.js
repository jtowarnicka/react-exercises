import React from 'react';
import Comment from './Comment';

const CommentsList = ({ comments }) => {
  return (
    <ul>
      {comments
        .map((comment, id) => (
          <Comment key={id} email={comment.email} name={comment.name} />
        ))
        .reverse()}
    </ul>
  );
};
export default CommentsList;
