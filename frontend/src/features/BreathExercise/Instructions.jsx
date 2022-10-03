/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect } from 'react';
import style from './BreathExercise.module.scss';

function Instructions() {
  const [timer, setTimer] = useState(1);
  useEffect(() => {
    if (timer < 5) {
      const int = setInterval(() => setTimer((prev) => prev + 1), 1000);
      return () => {
        clearInterval(int);
      };
    }
    return setTimer(1);
  });
  return <div className={style.breath_timer}>{timer}</div>;
}

export default Instructions;
