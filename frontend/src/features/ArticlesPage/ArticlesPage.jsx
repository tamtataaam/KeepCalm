/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Article from './Article';
import { loadAsyncArticles } from '../../store/articlesSlice/articlesSlice';
import LoadingPage from '../LoadingPage/LoadingPage';

function ArticlesPage() {
  const { articles, loading } = useSelector((store) => store.articles);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAsyncArticles());
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <h3>Статьи</h3>
      {articles && articles.map((article) => <Article key={article.id} article={article} />)}
    </>
  );
}

export default ArticlesPage;
