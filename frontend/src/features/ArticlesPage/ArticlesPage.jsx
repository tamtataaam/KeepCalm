/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import Article from './Article';

function ArticlesPage() {
  const articles = useSelector((store) => store.articles);
  const { articles } = useSelector((store) => store.articles);

  return (
    <>
      <h3>Статьи</h3>
      {articles && articles.map((article) => <Article key={article.id} article={article} />)}
    </>
  );
}

export default ArticlesPage;
