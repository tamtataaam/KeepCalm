import React from 'react';
import { useSelector } from 'react-redux';
import LoadingPage from '../LoadingPage/LoadingPage';
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
            <div key={note.id}>
              <OneNote note={note} />
            </div>
          ))
        ) : (
          <LoadingPage />
        )}
      </div>
      <div className={style.form_add_notes_container}>
        <FormAddNote />
      </div>
    </div>
  );
}

export default UserDiary;
