/* eslint-disable no-return-assign */
import React, { useRef } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
// import { videos } from './videoFile';
import { videos } from './videoFile';
// import { musick } from './musickFile';
import style from './SleepPage.module.scss';
import { changePlayingId } from '../../store/userSlice/userSlice';

function CompositionPage({ composition, change }) {
  const { nowPlaying } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const audioPlayer = useRef(); // reference our audio component
  const togglePlayPause = (id) => {
    if (composition.id === nowPlaying) {
      audioPlayer.current.pause();
      dispatch(changePlayingId(null));
      // console.log('in 1st if', nowPlaying);
      // console.log('in id', composition.id);
    } else {
      // console.log('before clear', nowPlaying);
      // console.log('in id', composition.id);

      dispatch(changePlayingId(id));
      // console.log('in else', nowPlaying);
      // console.log('in id', composition.id);

      if (nowPlaying === composition.id) {
        // console.log(111111);
        audioPlayer.current.play();
      } else {
        audioPlayer.current.pause();
      }
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
