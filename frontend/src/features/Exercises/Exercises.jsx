/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { useSelector } from 'react-redux';

import style from './Exercises.module.scss';

import ExerciseItem from './ExerciseItem';

function Exercises() {
  const { exercises } = useSelector((store) => store.exersices);

  return (
    <div className={style.exercises_container}>
      {exercises.length
        ? exercises.map((exercise) => (
            <ExerciseItem key={exercise.id} exercise={exercise} />
          ))
        : null}
    </div>
  );
}

export default Exercises;
