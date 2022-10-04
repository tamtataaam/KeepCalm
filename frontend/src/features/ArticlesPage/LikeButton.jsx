/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useSelector } from 'react-redux';
// import { toggleLike } from '../../store/articlesSlice/articlesSlice';
// import style from './Articles.module.scss';

function LikeButton({ oneArticleInfo }) {
  // const userId = useSelector((store) => store.user.data.id);
  const { favoriteArticles } = useSelector((state) => state.articles);
  // const allUserLikes = favoriteArticles.filter((el) => el.userId === userId);
  const allArticleLikes = favoriteArticles.filter((el) => el.articleId === oneArticleInfo.id);
  // const articleLikedByUser = userFavorite.filter((el) => el.articleId === oneArticleInfo.id);
  // const dispatch = useDispatch();

  return (
    <>
      <p>
        Нравится:
        {' '}
        {allArticleLikes.length}
      </p>
      {/* {!articleLikedByUser.length ? (
        <img
          className={style.like_img}
          src="heartBlack.png"
          onClick={() =>
            dispatch(toggleLike({ userId, articleId: oneArticleInfo.id }))}
          alt="..."
        />
      ) : (
        <img
          className={style.like_img}
          src="heart.png"
          onClick={() =>
            dispatch(toggleLike({ userId, articleId: oneArticleInfo.id }))}
          alt="..."
        />
      )} */}
    </>
  );
}

export default LikeButton;
