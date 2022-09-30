import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { oneExerciseAsyncInfo } from '../../store/Exercises/exerciseSlice';
// import style from './Exercises.module.scss';

function ExerciseFullInformation() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(oneExerciseAsyncInfo(id));
  }, []);

  const oneExerciseInfo = useSelector(
    (store) => store.exersices.oneExerciseInfo
  );

  return (
    <div>
      {oneExerciseInfo !== null ? <div>{oneExerciseInfo.title}</div> : null}
    </div>
  );
}

export default ExerciseFullInformation;
