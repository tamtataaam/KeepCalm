/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addOneNoteAsync } from '../../store/userDiarySlice/userDiarySlice';

import style from './UserDiary.module.scss';

function FormAddNote() {
  const dispatch = useDispatch();
  const userId = useSelector((store) => store.user.data.id);
  return (
    <form
      onSubmit={(event) => {
        // event.preventDefault();
        dispatch(
          addOneNoteAsync({
            title: event.target.title.value,
            content: event.target.content.value,
            userId,
          })
        );
      }}
    >
      <h2>Добавить новую запись</h2>
      <div>Введи название</div>
      <input type="text" name="title" placeholder="добавить название" />
      <div>Введи текст</div>
      <input className={style.input} name="content" />
      <button type="submit"> добавить</button>
    </form>
  );
}

export default FormAddNote;
