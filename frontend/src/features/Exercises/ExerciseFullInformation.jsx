import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { oneExerciseAsyncInfo } from '../../store/Exercises/exerciseSlice';
import style from './Exercises.module.scss';
import LoadingPage from '../LoadingPage/LoadingPage';

function ExerciseFullInformation() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(oneExerciseAsyncInfo(id));
  }, []);

  const oneExerciseInfo = useSelector(
    (store) => store.exercises.oneExerciseInfo
  );

  const navigate = useNavigate();

  return (
    <div className={style.exercise_container_main_for_individual}>
      <div className={style.exercise_container_button_individual}>
        {oneExerciseInfo !== null ? (
          <>
            <div key={id} className={style.exercise_container_individual}>
              <h2>{oneExerciseInfo.title}</h2>
              <img
                className={style.exercise_img_individual}
                src={oneExerciseInfo.imageUrl}
                alt="..."
              />
              <div>{oneExerciseInfo.description}</div>
            </div>
            <button
              type="button"
              onClick={() => {
                navigate(-1);
              }}
            >
              back to all exercises
            </button>
          </>
        ) : (
          <LoadingPage />
        )}
      </div>
    </div>
  );
}

export default ExerciseFullInformation;
