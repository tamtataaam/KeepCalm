/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Exercises.module.scss';

function ExerciseItem({ exercise }) {
  const navigate = useNavigate();
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      key={exercise.id}
      id={exercise.id}
      onClick={() => {
        navigate(`/exercises/${exercise.id}`);
      }}
    >
      <div>
        {' '}
        <img className={style.exercise_img} src={exercise.imageUrl} alt={exercise.title} />
        {/* <h3>{exercise.title}</h3> */}
      </div>
    </div>
  );
}

export default ExerciseItem;
