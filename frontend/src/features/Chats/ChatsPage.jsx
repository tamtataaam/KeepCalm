import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from './Chats.module.scss';
import ChatItem from './ChatItem';

function ChatsPage() {
  const navigate = useNavigate();
  const { allChats } = useSelector((store) => store.chats);

  return (
    <>
      <h1>Обсуждения:</h1>
      <input type="text" placeholder="Поиск обсуждения..." />
      <button className={style.button} type="button">Найти</button>
      <div className={style.container}>
        <div className={style.chats_container}>
          {allChats.length
            ? allChats.map((chat) => (
              <ChatItem key={chat.id} chat={chat} />
            ))
            : null}
        </div>

        <div className={style.addchat_button_container}>
          <button className={style.button} type="button" onClick={() => navigate('/addchat')}>+ Добавить обсуждение</button>
        </div>
      </div>
    </>
  );
}

export default ChatsPage;
