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
      <div>
        <a
          href={`${chat.telegramUrl}`}
          target="_blank"
          rel="noreferrer"
        >
          {chat.title}
        </a>
      </div>
    </div>
  );
}

export default ChatItem;
