/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavoriteAsync, deleteToFavoriteAsync } from '../../store/exercisesSlice/exerciseSlice';
import style from './Exercises.module.scss';

function FavoriteButton({ exercise }) {
  const userId = useSelector((store) => store.user.data.id);
  const { favoriteExercise } = useSelector((state) => state.exercises);
  const userFav = favoriteExercise.filter((el) => el.userId === userId);
  const currentEx = userFav.filter((el) => el.exerciseId === exercise.id);
  const dispatch = useDispatch();

  return (
    <>
      {!currentEx.length ? (
        <img
          className={style.like_img}
          src="heartBlack.png"
          onClick={() =>
            dispatch(addToFavoriteAsync({ userId, exerciseId: exercise.id }))}
          alt="..."
        />
      ) : (
        <img
          className={style.like_img}
          src="heart.png"
          onClick={() =>
            dispatch(deleteToFavoriteAsync({ userId, exerciseId: exercise.id }))}
          alt="..."
        />
      )}
    </>
  );
}

export default FavoriteButton;
