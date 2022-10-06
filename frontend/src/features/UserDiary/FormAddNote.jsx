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
      className={style.form}
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(
          addOneNoteAsync({
            title: event.target.title.value,
            content: event.target.content.value,
            userId,
          })
        );
        event.target.reset();
      }}
    >
      <h2 className={style.h2}>Добавь новую запись</h2>

      <input
        className={style.input}
        type="text"
        name="title"
        placeholder="Название записи..."
        required
        autoComplete="off"
      />

      <textarea
        className={style.textarea}
        placeholder="Текст записи..."
        name="content"
        required
        autoComplete="off"
      />
      <button type="submit" className={style.add_button}>
        {' '}
        + Добавить
      </button>
    </form>
  );
}

export default FormAddNote;
