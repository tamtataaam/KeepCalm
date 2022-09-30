/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { useSelector } from 'react-redux';

import style from './Exercises.module.scss';

import ExerciseItem from './ExerciseItem';
import LoadingPage from '../LoadingPage/LoadingPage';

function Exercises() {
  const { allExercises } = useSelector((store) => store.exercises);

  return (
    <div className={style.exercises_container}>
      {allExercises.length ? (
        allExercises.map((exercise) => (
          <ExerciseItem key={exercise.id} exercise={exercise} />
        ))
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}

export default Exercises;
