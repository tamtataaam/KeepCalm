/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOneNoteAsync } from '../../store/userDiarySlice/userDiarySlice';

import style from './UserDiary.module.scss';

function OneNote({ note }) {
  const dispatch = useDispatch();
  const userId = useSelector((store) => store.user.data.id);
  const [flag, setFlag] = useState(true);
  const [flagChange, setFlagChange] = useState(true);
  return (
    <>
      <div className={style.note_container}>
        <div
          key={note.id}
          id={note.id}
          onClick={() => setFlag((prev) => !prev)}
        >
          <div>Дата создания: {note.createdAt.slice(0, 10)}</div>
          <div
            style={!flagChange ? { display: 'none' } : { display: 'inline' }}
          >
            Название: {note.title}
          </div>
        </div>

        <div
          className={style.note}
          style={flag ? { display: 'none' } : { display: 'inline' }}
        >
          Текст: {note.content}
        </div>

        <form style={flagChange ? { display: 'none' } : { display: 'inline' }}>
          <div>Название</div>
          <input />
        </form>
      </div>
      <button
        className={style.delete_button}
        type="button"
        onClick={() => {
          dispatch(deleteOneNoteAsync({ noteId: note.id, userId }));
        }}
      >
        Удалить
      </button>
      <button
        type="button"
        className={style.delete_button}
        onClick={() => setFlagChange((prev) => !prev)}
      >
        Изменить
      </button>
    </>
  );
}

export default OneNote;
