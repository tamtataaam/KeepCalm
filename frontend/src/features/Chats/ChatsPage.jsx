import React from 'react';
import { useSelector } from 'react-redux';

import style from './Chats.module.scss';

import ChatItem from './ChatItem';

function ChatsPage() {
  const { allChats } = useSelector((store) => store.chats);
  return (
    <div className={style.chats_container}>
      {allChats.length
        ? allChats.map((chat) => (
          <ChatItem key={chat.id} chat={chat} />
        ))
        : null}
    </div>
  );
}

export default ChatsPage;
