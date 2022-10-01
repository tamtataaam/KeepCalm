import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { oneArticleAsyncInfo } from '../../store/articlesSlice/articlesSlice';
// import { Comments } from '../Comments/Comments';
import AddComment from '../Comments/AddComment';

function OneArticlePage() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(oneArticleAsyncInfo(id));
    // dispatch(loadComments(id));
  }, []);

  const { oneArticleInfo } = useSelector((store) => store.articles);
  // const comments = useSelector((state) => state.comments.data);

  return (
    <>
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
      <div>
        <AddComment />
      </div>
    </>
  );
}

export default OneArticlePage;
