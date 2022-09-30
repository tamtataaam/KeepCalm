/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { useSelector } from 'react-redux';

import style from './Exercises.module.scss';

import ExerciseItem from './ExerciseItem';
import LoadingPage from '../LoadingPage/LoadingPage';
import FavoriteButton from './FavoriteButton';

function Exercises() {
  const { allExercises } = useSelector((store) => store.exercises);

  return (
    <div className={style.exercises_container}>
      {allExercises.length ? (
        allExercises.map((exercise) => (
          <div key={exercise.id}>
            <FavoriteButton
              className={style.favorite_button}
              exercise={exercise}
            />
            <ExerciseItem exercise={exercise} />
          </div>
        ))
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}

export default Exercises;
