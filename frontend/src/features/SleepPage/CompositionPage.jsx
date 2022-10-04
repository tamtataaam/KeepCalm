import React, { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
// import { videos } from './videoFile';
import { test } from './test';
import style from './SleepPage.module.scss';

function CompositionPage({ composition, change }) {
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
          onClick={() => {
            togglePlayPause();
            change(isPlaying);
          }}
          className={style.playPause_sounds}
        >
          {isPlaying ? <FaPause /> : <FaPlay className={style.play} />}
        </button>
        <div style={!isPlaying ? { display: 'none' } : {}}>
          {test[composition.index].path}
        </div>
        {/* <video className={style.video} autoPlay muted loop id="myVideo">
          <source src={`${videos[composition.index].path}`} type="video/mp4" />
        </video> */}
      </div>
    </div>
  );
}

export default CompositionPage;
