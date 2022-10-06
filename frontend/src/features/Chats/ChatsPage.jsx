/* eslint-disable no-unused-expressions */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
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

  const filteredChatsDecsription = allChats.filter((chat) =>
    chat.description.toLowerCase().includes(value.toLowerCase())
  );

  const totalFiltered = filteredChatsTitle.concat(filteredChatsDecsription);
  const set = new Set(totalFiltered);
  const filteredByTwoWilters = [];
  const foo = () => {
    for (const elem of set) {
      filteredByTwoWilters.push(elem);
    }
  };
  useEffect(() => {
    foo();
    console.log(value);
    console.log(filteredByTwoWilters);
  }, [value]);

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
          {filteredByTwoWilters.length ? (
            filteredByTwoWilters.map((chat) => (
              <ChatItem key={chat.id} chat={chat} />
            ))
          ) : (
            <h2>Список пуст</h2>
          )}
        </div>
        {/* <div className={style.chats_container}>
          {filteredByTwoWilters.length ? (
            filteredByTwoWilters.map((chat) => (
              <ChatItem key={chat.id} chat={chat} />
            ))
          ) : (
            <h2>Список пуст</h2>
          )}
        </div> */}

        <div className={style.addchat_button_container}>
          <AddChatPage />
        </div>
      </div>
    </>
  );
}

export default ChatsPage;
