/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleLike } from '../../store/articlesSlice/articlesSlice';
import style from './Articles.module.scss';

function Likes({ oneArticleInfo }) {
  const userId = useSelector((store) => store.user.data.id);
  const { favoriteArticles } = useSelector((state) => state.articles);
  const allArticleLikes = favoriteArticles.filter((el) => el.articleId === oneArticleInfo.id);
  const allUserLikes = favoriteArticles.filter((el) => el.userId === userId);
  const articleLikedByUser = allUserLikes.filter((el) => el.articleId === oneArticleInfo.id);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        {allArticleLikes.length === 0
          ? <p>Поставьте лайк первым</p>
          : allArticleLikes.length === 1
            ? <p>Нравится 1 человеку</p>
            : allArticleLikes.length === 1 && articleLikedByUser.length
              ? <p>Нравится вам</p>
              : allArticleLikes.length === 2 && articleLikedByUser.length
                ? (
                  <p>
                    Нравится вам и ещё
                    {' '}
                    {allArticleLikes.length - 1}
                    {' '}
                    человеку
                  </p>
                )
                : allArticleLikes.length > 2 && articleLikedByUser.length
                  ? (
                    <p>
                      Нравится вам и ещё
                      {' '}
                      {allArticleLikes.length - 1}
                      {' '}
                      людям
                    </p>
                  )
                  : (
                    <p>
                      Нравится
                      {' '}
                      {allArticleLikes.length}
                      {' '}
                      людям
                    </p>
                  )}
      </div>
      {!articleLikedByUser.length ? (
        <img
          className={style.like_img}
          src="/heartBlack.png"
          onClick={() =>
            dispatch(toggleLike({ userId, articleId: oneArticleInfo.id }))}
          alt="..."
        />
      ) : (
        <img
          className={style.like_img}
          src="/heart.png"
          onClick={() =>
            dispatch(toggleLike({ userId, articleId: oneArticleInfo.id }))}
          alt="..."
        />
      )}
    </>
  );
}

export default Likes;
