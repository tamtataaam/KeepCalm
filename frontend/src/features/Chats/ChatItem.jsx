/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Chats.module.scss';

function ChatItem({ chat }) {
  const navigate = useNavigate();
  return (
    <div
      key={chat.id}
      className={style.chat_card}
      id={chat.id}
      onClick={() => {
        navigate(`/chats/${chat.id}`);
      }}
    >
      <div>
        {' '}
        <h3>{chat.title}</h3>
        <h3>{chat.telegramUrl}</h3>
      </div>
    </div>
  );
}

export default ChatItem;
