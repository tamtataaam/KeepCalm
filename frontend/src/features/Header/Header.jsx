import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import style from './Header.module.scss';

function Header() {
  return (
    <header className={style.header}>
      <div>
        <a className={style.logo_nav} href="/">
          KeepCalm
        </a>
      </div>
      <div className={style.button_nav}>
        <Button>Саня</Button>
        <Avatar className={style.avatar_nav} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <Button>Выйти</Button>
      </div>
    </header>
  );
}

export default Header;
