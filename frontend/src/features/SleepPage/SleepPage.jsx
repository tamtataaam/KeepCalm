/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-expressions */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import { BsArrowRightShort } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
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
import { logoutUser } from '../../store/userSlice/userSlice';
import { musick } from './musickFile';
import style from './SleepPage.module.scss';
import CompositionPage from './CompositionPage';

function SleepPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector((store) => store.user.data.name);
  const [flagtext, setFlagtext] = useState(true);

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
  const change = (value) => {
    setFlagtext(value);
  };
  return (
    <>
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

      <div className={style.mainaudioPlayer_container}>
        {musick.map((composition) => (
          <div key={composition.name}>
            <CompositionPage composition={composition} change={change} />
          </div>
        ))}
      </div>
      <div>
        <div
          className={style.instruction}
          style={!flagtext ? { display: 'none' } : {}}
        >
          Выберите тот звук, который наиболее вам приятен и погрузитесь в
          безмятежность
        </div>
      </div>
    </>
  );
}

export default SleepPage;
