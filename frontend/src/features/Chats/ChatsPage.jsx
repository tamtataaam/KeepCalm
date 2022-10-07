/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import style from './Chats.module.scss';
import ChatItem from './ChatItem';
import AddChatPage from './AddChatPage';

function ChatsPage() {
  const [value, setValue] = useState('');
  const { allChats } = useSelector((store) => store.chats);

  const filteredChatsTitle = allChats.filter((chat) =>
    chat.title.toLowerCase().includes(value.toLowerCase())
  );

  return (
    <>
      <div className={style.search_container}>
        <h1>Обсуждения:</h1>
        <input
          onChange={(event) => setValue(event.target.value.toLowerCase().trim())}
          className={style.input}
          type="text"
          placeholder="Поиск обсуждения..."
        />
        <button className={style.button} type="button">
          Найти
        </button>
      </div>
      <div className={style.container}>
        <div className={style.chats_container}>
          {filteredChatsTitle.length ? (
            filteredChatsTitle.map((chat) => (
              <ChatItem key={chat.id} chat={chat} />
            ))
          ) : (
            <h2>Список пуст</h2>
          )}
        </div>

        <div className={style.addchat_button_container}>
          <AddChatPage />
        </div>
      </div>
    </>
  );
}

export default ChatsPage;
