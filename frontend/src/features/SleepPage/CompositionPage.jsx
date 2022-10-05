import React, { useState, useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
// import { videos } from './videoFile';
import { videos } from './videoFile';
import style from './SleepPage.module.scss';

function CompositionPage({ composition, change }) {
  const [id, setIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioPlayer = useRef(); // reference our audio component

  const togglePlayPause = () => {
    const prevValue = id;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  };
  return (
    <>
      <div className={style.audioPlayer_container}>
        <h3 style={{ zIndex: '1' }}>{composition.name}</h3>
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
              setIndex(composition.id);
            }}
            className={style.playPause_sounds}
          >
            {isPlaying ? <FaPause /> : <FaPlay className={style.play} />}
          </button>
        </div>
      </div>
      <video
        className={style.video}
        autoPlay
        muted
        loop
        id="myVideo"
        style={!isPlaying ? { display: 'none' } : {}}
      >
        <source src={`${videos[composition.index].path}`} type="video/mp4" />
      </video>
    </>
  );
}

export default CompositionPage;
