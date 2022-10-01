/* eslint-disable indent */
/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-curly-newline */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToFavoriteAsync } from '../../store/exercisesSlice/exerciseSlice';

function FavoriteButton({ exercise }) {
  const userId = useSelector((store) => store.user.data.id);
  const [flag, setFlag] = useState(true);
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onClick={() =>
        dispatch(
          addToFavoriteAsync({ userId, exerciseId: exercise.id }),
          setFlag((prev) => !prev)
        )
      }
    >
      {flag ? <>Add to fav</> : <>Delete from fav</>}
    </button>
  );
}

export default FavoriteButton;
