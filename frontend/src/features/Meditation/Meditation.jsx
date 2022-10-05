/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';
import { useDispatch, useSelector } from 'react-redux';
// import { BsArrowRightShort } from 'react-icons/bs';
import { RiArrowGoBackFill, RiArrowGoForwardFill } from 'react-icons/ri';
import { FaPlay, FaPause } from 'react-icons/fa';
import { logoutUser } from '../../store/userSlice/userSlice';
import style from './Meditation.module.scss';

function Meditation() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const userName = useSelector((store) => store.user.data.name);

  // references
  const audioPlayer = useRef(); // reference our audio component
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(currentTime);
    progressBar.current.max = seconds;
    // TimerNull();
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState, progressBar?.current?.value]);

  const TimerNull = () => audioPlayer.current.duration - progressBar.current.value;

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      '--seek-before-width',
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 30);
    changeRange();
  };

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value + 30);
    changeRange();
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    dispatch(logoutUser());
    navigate('/');
  };
  return (
    <div className={style.meditation_container}>
      <div>
        <Link className={style.logo_nav} to="/exercises">
          KeepCalm
        </Link>
        <div className={style.button_nav}>
          <Box
            sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}
          >
            <Typography style={{ color: 'white' }} sx={{ minWidth: 10 }}>
              {userName}
            </Typography>
            <Tooltip title="Account settings">
              <IconButton
                onClick={handleClick}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
              </IconButton>
            </Tooltip>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={() => navigate('/lk')}>
              <Avatar /> Мой аккаунт
            </MenuItem>
            <Divider />
            <MenuItem onClick={logout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Выйти
            </MenuItem>
          </Menu>
        </div>
      </div>
      <div className={style.audioPlayer}>
        <p>{ audioPlayer.current ? calculateTime(TimerNull()) : '00:00'}</p>
        <audio ref={audioPlayer} className={style.audio} controls src="Meditation.mp3">
          <track kind="captions" />
        </audio>
        <div className={style.play_pause_div}>
          <div className={style.rewind_div}>
            <button
              type="button"
              className={style.forwardBackward}
              onClick={backThirty}
            >
              <RiArrowGoBackFill className={style.rewind_icon} /> 30
            </button>
          </div>
          <button
            type="button"
            onClick={togglePlayPause}
            className={style.playPause}
          >
            {isPlaying ? <FaPause /> : <FaPlay className={style.play} />}
          </button>
          <div className={style.rewind_div}>
            <button
              type="button"
              className={style.forwardBackward}
              onClick={forwardThirty}
            >
              <RiArrowGoForwardFill className={style.rewind_icon} /> 30
            </button>
          </div>
        </div>

        <div className={style.currentTime}>{calculateTime(currentTime)}</div>
        <input
          type="range"
          className={style.progressBar}
          ref={progressBar}
          defaultValue="0"
          onChange={changeRange}
        />
      </div>

      <video className={style.video} autoPlay muted loop id="myVideo">
        <source src="videoplayback.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default Meditation;
