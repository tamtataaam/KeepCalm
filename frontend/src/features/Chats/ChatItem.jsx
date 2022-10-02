/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import style from './Chats.module.scss';

function ChatItem({ chat }) {
  return (
    <div
      key={chat.id}
      className={style.chat_card}
      id={chat.id}
    >
      <div className={style.chat_info}>
        <h3 className={style.text}>
          Название:
          {' '}
          {chat.title}
        </h3>

        <h3 className={style.text}>Описание:</h3>

        <a
          href={`${chat.telegramUrl}`}
          target="_blank"
          rel="noreferrer"
          className={style.text}
        >
          Перейти...
        </a>
      </div>
    </div>
  );
}

export default ChatItem;
