import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './WelcomePage.css';

function WelcomePage() {
  const user = useSelector((store) => store.user.data);
  const navigate = useNavigate();

  return (
    <div className="welcome_container">
      <h1 className="welcome_h1">
        Привет,
        {' '}
        {user.name}
        !
      </h1>
      <h1 className="welcome_h1">Добро пожаловать в KeepCalm</h1>
      <h2 className="welcome_h2">Ты найдешь здесь спокойствие</h2>

      <div>
        <img src="welcome_image.svg" alt="welcome" className="welcome_image_container" />
        <button className="welcome_btn" type="button" onClick={() => navigate('/mood')}>Начать</button>
      </div>

    </div>
  );
}

export default WelcomePage;
