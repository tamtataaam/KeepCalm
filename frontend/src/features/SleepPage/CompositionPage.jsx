/* eslint-disable no-return-assign */
import React, { useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { videos } from './videoFile';
import style from './SleepPage.module.scss';
import { changePlayingId } from '../../store/userSlice/userSlice';

function CompositionPage({ composition, change }) {
  const { nowPlaying } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const audioPlayer = useRef();

  const play = () => {
    audioPlayer.current.play();
  };

  const pause = () => {
    if (audioPlayer.current) {
      audioPlayer.current.pause();
    }
  };

  const togglePlayPause = (id) => {
    if (composition.id === nowPlaying) {
      dispatch(changePlayingId(null));
    } else {
      dispatch(changePlayingId(id));
    }
  };

  return (
    <>
      <div className={style.audioPlayer_container}>
        {composition.id === nowPlaying ? play() : pause()}
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
              togglePlayPause(composition.id);
              change(nowPlaying === composition.id);
            }}
            className={style.playPause_sounds}
          >
            {nowPlaying === composition.id ? (
              <FaPause />
            ) : (
              <FaPlay className={style.play} />
            )}
          </button>
        </div>
      </div>
      <video
        className={style.video}
        autoPlay
        muted
        loop
        id="myVideo"
        style={!(nowPlaying === composition.id) ? { display: 'none' } : {}}
      >
        <source src={`${videos[composition.index].path}`} type="video/mp4" />
      </video>
    </>
  );
}
export default CompositionPage;
