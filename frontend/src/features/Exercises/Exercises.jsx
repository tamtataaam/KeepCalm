/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import style from './Exercises.module.scss';

import { loadAsyncExercises } from '../../store/exercisesSlice/exerciseSlice';
import ExerciseItem from './ExerciseItem';
import LoadingPage from '../LoadingPage/LoadingPage';
// import FavoriteButton from './FavoriteButton';

function Exercises() {
  const { allExercises, loading } = useSelector((store) => store.exercises);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAsyncExercises());
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className={style.container}>
      <h1 className={style.h1}>Чем хочешь заняться?</h1>
      <h2 className={style.h2}>Выбери упражнение:</h2>

      <div className={style.exercises_container}>
        {allExercises.length
          && allExercises.map((exercise) => (
            <div key={exercise.id} className={style.exercise_item}>
              {/* <FavoriteButton
                className={style.favorite_button}
                exercise={exercise}
              /> */}
              <ExerciseItem exercise={exercise} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Exercises;
