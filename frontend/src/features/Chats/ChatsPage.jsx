import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import style from './Chats.module.scss';
import ChatItem from './ChatItem';
import AddChatPage from './AddChatPage';

function ChatsPage() {
  const [value, setValue] = useState('');
  const { allChats } = useSelector((store) => store.chats);

  // const filteredChats = allChats.filter((chat) => chat.name
  //   .toLowerCase()
  //   .includes(value.toLowerCase()));
  const a = allChats.filter((chat) => chat.title.match(value));
  console.log(a);

  return (
    <>
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
      <div className={style.container}>
        <div className={style.chats_container}>
          {allChats.length ? (
            allChats.map((chat) => <ChatItem key={chat.id} chat={chat} />)
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
