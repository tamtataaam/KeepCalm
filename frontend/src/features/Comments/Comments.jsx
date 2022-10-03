/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';

function Comments({ comment }) {
  return (
    <>
      {comment
        && (
        <div className="comment_container">
          <span className="comment_autor">{comment.User.name}</span>
          <div className="comment_content">{comment.commentText}</div>
        </div>
        )}
    </>
  );
}

export default Comments;
