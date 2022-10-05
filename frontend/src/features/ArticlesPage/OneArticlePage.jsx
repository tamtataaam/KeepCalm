import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadLikes, oneArticleAsyncInfo } from '../../store/articlesSlice/articlesSlice';
import { loadComments } from '../../store/commentsSlice/commentsSlice';
import Comments from '../Comments/Comments';
import AddComment from '../Comments/AddComment';
import Likes from './Likes';
import LoadingPage from '../LoadingPage/LoadingPage';

function OneArticlePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { oneArticleInfo, loading } = useSelector((store) => store.articles);
  const comments = useSelector((state) => state.comments.data);

  useEffect(() => {
    dispatch(oneArticleAsyncInfo(id));
    dispatch(loadComments(id));
    dispatch(loadLikes());
  }, [dispatch, id]);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <div>
        {
        oneArticleInfo
          ? (
            <>
              <h3>{oneArticleInfo.title}</h3>
              <img src={oneArticleInfo.img} alt="article" />
              <Likes
                oneArticleInfo={oneArticleInfo}
              />
              <p>{oneArticleInfo.content}</p>
            </>
          ) : null
        }
      </div>
      <div className="article_comments">
        <h3>Комментарии:</h3>
        <div>
          {comments.length === 0
            ? <p className="comments_info">Нет комментариев</p>
            : comments.length === 1
              ? (
                <p className="comments_info">
                  {comments.length}
                  {' '}
                  комментарий
                </p>
              )
              : comments.length > 1 && comments.length < 5
                ? (
                  <p className="comments_info">
                    {comments.length}
                    {' '}
                    комментария
                  </p>
                )
                : (
                  <p className="comments_info">
                    {comments.length}
                    {' '}
                    комментариев
                  </p>
                )}
        </div>
        <div>
          {comments.map(
            (comment) => (
              <Comments
                key={comment.id}
                comment={comment}
                oneArticleInfo={oneArticleInfo}
              />
            ),
          )}
        </div>
      </div>
      <div>
        <AddComment />
      </div>
    </>
  );
}

export default OneArticlePage;
