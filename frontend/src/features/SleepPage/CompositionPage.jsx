import React, { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import style from './SleepPage.module.scss';

function CompositionPage({ composition }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioPlayer = useRef(); // reference our audio component

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };
  return (
    <div className={style.audioPlayer_container}>
      <h3>{composition.name}</h3>
      <div className={style.audioPlayer_sounds}>
        <audio
          ref={audioPlayer}
          className={style.audio}
          controls
          loop
          src={`${composition.path}`}
        >
          <track kind="captions" />
        </audio>
        <button
          type="button"
          onClick={togglePlayPause}
          className={style.playPause_sounds}
        >
          {isPlaying ? <FaPause /> : <FaPlay className={style.play} />}
        </button>
      </div>
    </div>
  );
}

export default CompositionPage;
