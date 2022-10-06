/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOneNoteAsync } from '../../store/userDiarySlice/userDiarySlice';
import ChangeForm from './ChangeForm';

import style from './UserDiary.module.scss';

function OneNote({ note }) {
  const dispatch = useDispatch();
  const userId = useSelector((store) => store.user.data.id);
  const [flag, setFlag] = useState(true);
  const [flagChange, setFlagChange] = useState(true);

  return (
    <div className={style.note_container}>
      <div
        className={style.title_info}
        key={note.id}
        id={note.id}
        onClick={() => setFlag((prev) => !prev)}
      >
        <div>Дата создания: {note.createdAt.slice(0, 10)}</div>
        <div style={!flagChange ? { display: 'none' } : { display: 'inline' }}>
          Название: {note.title}
        </div>
      </div>

      <div
        className={style.title_info}
        style={
          flag || !flagChange ? { display: 'none' } : { display: 'inline' }
        }
      >
        Содержание: {note.content}
      </div>

      <ChangeForm
        note={note}
        flagChange={flagChange}
        setFlagChange={setFlagChange}
      />
      <div className={style.buttons_container}>
        <button
          className={style.delete_button}
          type="button"
          onClick={() => {
            dispatch(deleteOneNoteAsync({ noteId: note.id, userId }));
          }}
          style={!flagChange ? { display: 'none' } : { display: 'inline' }}
        >
          Удалить
        </button>
        <button
          type="button"
          className={style.delete_button}
          onClick={() => setFlagChange((prev) => !prev)}
          style={!flagChange ? { display: 'none' } : { display: 'inline' }}
        >
          Изменить
        </button>
      </div>
    </div>
  );
}

export default OneNote;
