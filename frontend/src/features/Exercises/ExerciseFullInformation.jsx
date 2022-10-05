import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { oneExerciseAsyncInfo } from '../../store/exercisesSlice/exerciseSlice';
import style from './Exercises.module.scss';
import LoadingPage from '../LoadingPage/LoadingPage';

function ExerciseFullInformation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(oneExerciseAsyncInfo(id));
  }, []);

  const oneExerciseInfo = useSelector(
    (store) => store.exercises.oneExerciseInfo
  );

  return (
    <div className={style.exercise_container_main_for_individual}>
      <div className={style.exercise_container_button_individual}>
        <Link to="/exercises" className={style.link}>
          ← Вернуться к заданиям
        </Link>
        {oneExerciseInfo !== null ? (
          <div key={id} className={style.exercise_container_individual}>
            <img
              className={style.exercise_img_individual}
              src={`/${oneExerciseInfo.imageUrl}`}
              alt={oneExerciseInfo.title}
            />
            <div className={style.diary_discription}>
              {oneExerciseInfo.description}
            </div>

            <button
              className={style.button}
              type="button"
              onClick={() => {
                navigate(oneExerciseInfo.url);
              }}
            >
              Приступить
            </button>
          </div>
        ) : (
          <LoadingPage />
        )}
      </div>
    </div>
  );
}

export default ExerciseFullInformation;
