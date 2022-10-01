/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteOneNoteAsync } from '../../store/userDiarySlice/userDiarySlice';

import style from './UserDiary.module.scss';

function OneNote({ note }) {
  const dispatch = useDispatch();
  return (
    <>
      <div key={note.id} id={note.id} className={style.note}>
        <div>Дата создания: {note.createdAt.slice(0, 10)}</div>
        <div>Название: {note.title}</div>
      </div>
      <button
        type="button"
        onClick={() => {
          dispatch(deleteOneNoteAsync(note.id));
        }}
      >
        Удалить
      </button>
      <button type="button">Изменить</button>
    </>
  );
}

export default OneNote;
