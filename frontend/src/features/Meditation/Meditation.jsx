import React from 'react';
import style from './Meditation.module.scss';

function Meditation() {
  return (
    <div>
      <audio className={style.audio} controls src="Meditation.mp3">
        <track kind="captions" />
      </audio>
    </div>
  );
}

export default Meditation;
