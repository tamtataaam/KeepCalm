/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Article({ article }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/articles/${article.id}`)}>
      <h3>{article.title}</h3>
    </div>
  );
}

export default Article;
