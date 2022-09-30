/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavoriteAsync } from '../../store/Exercises/exerciseSlice';

function FavoriteButton({ exercise }) {
  // const userId = 1;
  const userId = useSelector((store) => store.user.data.id);
  console.log(userId);
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onClick={() =>
        dispatch(addToFavoriteAsync({ userId, exerciseId: exercise.id }))
      }
    >
      Add to fav
    </button>
  );
}

export default FavoriteButton;
