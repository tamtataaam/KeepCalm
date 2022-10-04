import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './BreathExercise.module.scss';
import Instructions from './Instructions';
import Text from './Text';

function BreathExercise() {
  const navigate = useNavigate();
  return (
    <div className={style.breath_container}>
      <Instructions />
      <svg viewBox="0 0 200 200" className={style.circle}>
        <defs>
          <linearGradient
            id="gradient--colors"
            x1="0"
            y1="100%"
            x2="100%"
            y2="0"
          >
            <stop offset="0%" stopColor="dodgerblue" />
            <stop offset="50%" stopColor="fuchsia" />
            <stop offset="100%" stopColor="yellow" />
          </linearGradient>

          <radialGradient id="gradient--colors-transparency" fx="25%" fy="25%">
            <stop offset="0%" stopColor="black" />
            <stop offset="30%" stopColor="black" stopOpacity=".2" />
            <stop offset="97%" stopColor="white" stopOpacity=".4" />
            <stop offset="100%" stopColor="black" />
          </radialGradient>

          <mask id="mask--colors-transparency">
            <rect
              fill="url(#gradient--colors-transparency)"
              width="100%"
              height="100%"
            />
          </mask>

          <radialGradient id="gradient--bw-light" fy="10%">
            <stop offset="60%" stopColor="black" stopOpacity="0" />
            <stop offset="90%" stopColor="white" stopOpacity=".25" />
            <stop offset="100%" stopColor="black" />
          </radialGradient>

          <mask id="mask--light-bottom">
            <rect fill="url(#gradient--bw-light)" width="100%" height="100%" />
          </mask>

          <mask id="mask--light-top">
            <rect
              fill="url(#gradient--bw-light)"
              width="100%"
              height="100%"
              transform="rotate(180, 100, 100)"
            />
          </mask>

          <radialGradient id="gradient--spot" fy="20%">
            <stop offset="10%" stopColor="white" stopOpacity=".7" />
            <stop offset="70%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle
          r="50%"
          cx="50%"
          cy="50%"
          fill="aqua"
          mask="url(#mask--light-bottom)"
        />

        <circle
          r="50%"
          cx="50%"
          cy="50%"
          fill="yellow"
          mask="url(#mask--light-top)"
        />

        <circle
          r="50%"
          cx="50%"
          cy="50%"
          fill="url(#gradient--colors)"
          mask="url(#mask--colors-transparency)"
        />
      </svg>
      <Text />
      <button
        type="button"
        onClick={() => navigate('/exercises')}
        className={style.button}
      >
        ← Вернуться к заданиям
      </button>
    </div>
  );
}

export default BreathExercise;
