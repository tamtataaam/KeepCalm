import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { oneArticleAsyncInfo } from '../../store/articlesSlice/articlesSlice';

function OneArticlePage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(oneArticleAsyncInfo(id));
  }, []);

  const { oneArticleInfo } = useSelector((store) => store.articles);

  return (
    <div>
      {
      oneArticleInfo
        ? (
          <>
            <h3>{oneArticleInfo.title}</h3>
            <img src={oneArticleInfo.img} alt="article" />
            <p>{oneArticleInfo.content}</p>
          </>
        ) : null
      }
    </div>
  );
}

export default OneArticlePage;
