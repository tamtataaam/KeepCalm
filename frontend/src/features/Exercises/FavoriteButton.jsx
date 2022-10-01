/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavoriteAsync } from '../../store/exercisesSlice/exerciseSlice';

function FavoriteButton({ exercise }) {
  // const userId = 1;
  const userId = useSelector((store) => store.user.data.id);
  const { favoriteExerciseActual } = useSelector((store) => store.exercises);
  const { favoriteExercise } = useSelector((store) => store.exercises);
  console.log(favoriteExercise);
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onClick={() =>
        dispatch(addToFavoriteAsync({ userId, exerciseId: exercise.id }))
      }
    >
      {!favoriteExerciseActual.status &&
      favoriteExerciseActual.exerciseId === exercise.id ? (
        <>Add to fav</>
      ) : (
        <>Delete from fav</>
      )}
    </button>
  );
}

export default FavoriteButton;
