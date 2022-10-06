import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { loadLikes, oneArticleAsyncInfo } from '../../store/articlesSlice/articlesSlice';
import { loadComments } from '../../store/commentsSlice/commentsSlice';
import Comments from '../Comments/Comments';
import AddComment from '../Comments/AddComment';
import Likes from './Likes';
// import LoadingPage from '../LoadingPage/LoadingPage';
import style from './ArticlesPage.module.scss';
import LoadingPage from '../LoadingPage/LoadingPage';

function OneArticlePage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { oneArticleInfo } = useSelector((store) => store.articles);
  const comments = useSelector((state) => state.comments.data);

  useEffect(() => {
    dispatch(oneArticleAsyncInfo(id));
    dispatch(loadComments(id));
    dispatch(loadLikes());
  }, [id]);

  // if (loading) {
  //   return <LoadingPage />;
  // }

  return (
    <div className={style.article_container}>
      {
        oneArticleInfo
          ? (
            <>
              <h2 className={style.article_title}>{oneArticleInfo.title}</h2>
              <img className={style.article_image} src={oneArticleInfo.img} alt="article" />
              <Likes
                oneArticleInfo={oneArticleInfo}
              />
              <p className={style.article_content}>{oneArticleInfo.content}</p>
            </>
          ) : null
        }
      <div className="article_comments">
        {/* <h3>Комментарии:</h3> */}
        <div>
          {comments.length === 0
            ? <p className={style.comments_info}>Нет комментариев</p>
            : comments.length === 1
              ? (
                <p className={style.comments_info}>
                  {comments.length}
                  {' '}
                  комментарий:
                </p>
              )
              : comments.length > 1 && comments.length < 5
                ? (
                  <p className={style.comments_info}>
                    {comments.length}
                    {' '}
                    комментария:
                  </p>
                )
                : (
                  <p className={style.comments_info}>
                    {comments.length}
                    {' '}
                    комментариев:
                  </p>
                )}
        </div>
        <div className={style.comments}>
          { oneArticleInfo && comments.length ? comments.map(
            (comment) => (
              <Comments
                key={comment.id}
                comment={comment}
                oneArticleInfo={oneArticleInfo}
              />
            ),
          ) : <LoadingPage /> }
        </div>
      </div>
      <div>
        <AddComment />
      </div>
    </div>
  );
}

export default OneArticlePage;
