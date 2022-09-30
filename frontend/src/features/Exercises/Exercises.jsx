/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React from 'react';
import { useSelector } from 'react-redux';
import './Exercises.css';

function Exercises() {
  const { exercises } = useSelector((store) => store.exersices);

  return (
    <div>
      {exercises.length
        ? exercises.map((exercise) => (
            <div key={exercise.id}>
              {exercise.title}
              <img src={exercise.imageUrl} alt="..." />
            </div>
          ))
        : null}
    </div>
  );
}

export default Exercises;
