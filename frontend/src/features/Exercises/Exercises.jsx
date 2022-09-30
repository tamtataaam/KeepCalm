/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { useSelector } from 'react-redux';

import style from './Exercises.module.scss';

import ExerciseItem from './ExerciseItem';

function Exercises() {
  const { allExercises } = useSelector((store) => store.exersices);

  return (
    <div className={style.exercises_container}>
      {allExercises.length
        ? allExercises.map((exercise) => (
            <ExerciseItem key={exercise.id} exercise={exercise} />
          ))
        : null}
    </div>
  );
}

export default Exercises;
