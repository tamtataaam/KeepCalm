import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import './Header.css';

function Header() {
  return (
    <header>
      <div>
        <a className="logo-nav" href="/">
          KeepCalm
        </a>
      </div>
      <div className="button-nav">
        <Button>Саня</Button>
        <Avatar className="avatar-nav" alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <Button>Выйти</Button>
      </div>
    </header>
  );
}

export default Header;
