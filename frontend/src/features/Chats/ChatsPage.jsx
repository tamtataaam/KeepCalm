import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import style from './Chats.module.scss';
import ChatItem from './ChatItem';

function ChatsPage() {
  const navigate = useNavigate();
  const { allChats } = useSelector((store) => store.chats);
  const isUser = useSelector((state) => state.user.isUser);

  return (
    <>
      <div className={style.chats_container}>
        {allChats.length
          ? allChats.map((chat) => (
            <ChatItem key={chat.id} chat={chat} />
          ))
          : null}
      </div>
      {isUser
        ? (
          <div className={style.addchat_button_container}>
            <button type="button" onClick={() => navigate('/chats/addchat')}>Создать чат</button>
          </div>
        )
        : null }
    </>
  );
}

export default ChatsPage;
