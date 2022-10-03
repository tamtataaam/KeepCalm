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
  // const { favoriteExercise } = useSelector((state) => state.exercises);
  // const userId = useSelector((store) => store.user.data.id);
  // console.log(favoriteExercise);

  return (
    <div className={style.container}>
      <h1 className={style.h1}>Чем хочешь заняться?</h1>
      <h2 className={style.h2}>Выбери упражнение:</h2>

      <div className={style.exercises_container}>
        {allExercises.length ? (
          allExercises.map((exercise) => (
            <div key={exercise.id} className={style.exercise_item}>
              <FavoriteButton
                className={style.favorite_button}
                exercise={exercise}
                // favorite={favorite}
              />
              <ExerciseItem exercise={exercise} />
            </div>
          ))
        ) : (
          <LoadingPage />
        )}
      </div>
    </div>
  );
}

export default Exercises;
