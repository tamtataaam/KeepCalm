/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Articles.module.scss';

function Article({ article }) {
  const navigate = useNavigate();

  return (
    <div className={style.article} onClick={() => navigate(`/articles/${article.id}`)}>
      <img className={style.article_img} src={article.img} alt="article" />
      <h3 className={style.article_title}>{article.title}</h3>
    </div>
  );
}

export default Article;
