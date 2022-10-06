/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Article from './Article';
import { loadAsyncArticles, clearlastArticle } from '../../store/articlesSlice/articlesSlice';
import LoadingPage from '../LoadingPage/LoadingPage';
import style from './Articles.module.scss';

function ArticlesPage() {
  const { articles, loading } = useSelector((store) => store.articles);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(11111);
    dispatch(loadAsyncArticles());

    return () => dispatch(clearlastArticle());
  }, [dispatch]);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className={style.container}>
      <h1 className={style.h1}>Статьи:</h1>
      <div className={style.articles_container}>
        {articles
          && articles.map((article) => (
            <div key={article.id} className={style.articles_item}>
              <Article article={article} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ArticlesPage;
