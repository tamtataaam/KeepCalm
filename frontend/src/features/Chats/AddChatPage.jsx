// import { style } from '@mui/system';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addChat } from '../../store/chatsSlice/chatsSlice';
import style from './Chats.module.scss';

function AddChatPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const telegramUrl = e.target.telegramUrl.value;
    const data = {
      title,
      telegramUrl
    };
    dispatch(addChat(data));
    e.target.reset();
    navigate('/chats');
  }

  return (
    <div className={style.addchat_container}>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="Название чата" />
        <input type="text" name="telegramUrl" placeholder="Ссылка на чат в Telegram" />
        <button type="submit">Создать чат</button>
      </form>
    </div>
  );
}

export default AddChatPage;
