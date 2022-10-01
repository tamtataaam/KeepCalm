// import { style } from '@mui/system';
import React from 'react';
import style from './Chats.module.scss';

function AddChat() {
  return (
    <div className={style.addchat_container}>
      <form>
        <input type="text" placeholder="Название чата" />
        <input type="text" placeholder="Ссылка на чат в Telegram" />
        <button type="submit">Создать чат</button>
      </form>
    </div>
  );
}

export default AddChat;
