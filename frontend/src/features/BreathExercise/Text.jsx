import React, { useState, useEffect } from 'react';
import style from './BreathExercise.module.scss';

function Text() {
  const [text, setText] = useState(
    'после полного выдоха медленно вдохните, считая до четырех'
  );
  useEffect(() => {
    if (text.length === 57) {
      const int = setInterval(
        () => setText('задержите дыхание еще на четыре счета'),
        4000
      );
      return () => {
        clearInterval(int);
      };
    }
    if (text.length === 37) {
      const int = setInterval(
        () => setText('медленно выдохните, считая до четырех '),
        4000
      );
      return () => {
        clearInterval(int);
      };
    }
    if (text.length === 38) {
      const int = setInterval(
        () => setText(' задержите дыхание еще на четыре счета '),
        4000
      );
      return () => {
        clearInterval(int);
      };
    }
    if (text.length === 39) {
      const int = setInterval(
        () =>
          setText('после полного выдоха медленно вдохните, считая до четырех'),
        4000
      );
      return () => {
        clearInterval(int);
      };
    }
    return setText('после полного выдоха медленно вдохните, считая до четырех');
  });
  return <div className={style.breath_text}>{text}</div>;
}

export default Text;
