// import { style } from '@mui/system';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addChat } from '../../store/chatsSlice/chatsSlice';
import style from './Chats.module.scss';

function AddChatPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const telegramUrl = e.target.telegramUrl.value;
    const data = {
      title,
      telegramUrl
    };
    dispatch(addChat(data));
    e.target.reset();
    navigate('/chats');
  }

  return (
    <div className={style.addchat_container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <input className={style.input} type="text" name="title" placeholder="Название обсуждения" required />
        <input className={style.input} type="text" name="telegramUrl" placeholder="Ссылка в telegram" required />
        <button className={style.button} type="submit">+ Добавить обсуждение</button>
      </form>
    </div>
  );
}

export default AddChatPage;
