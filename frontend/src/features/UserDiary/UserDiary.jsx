import React from 'react';
import { useSelector } from 'react-redux';
import OneNote from './OneNote';
import FormAddNote from './FormAddNote';
import style from './UserDiary.module.scss';

function UserDiary() {
  const { allnotes } = useSelector((store) => store.userDiary);

  return (
    <div className={style.all_page_container}>
      <div className={style.diary_notes_container}>
        {allnotes.length ? (
          allnotes.map((note) => (
            <OneNote key={note.id} note={note} />
          ))
        ) : (
          <h1>Добавь свою первую запись ....</h1>
        )}
      </div>
      <div className={style.form_add_notes_container}>
        <FormAddNote />
      </div>
    </div>
  );
}

export default UserDiary;
