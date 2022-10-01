import React from 'react';
import { useSelector } from 'react-redux';
import LoadingPage from '../LoadingPage/LoadingPage';
import style from './UserDiary.module.scss';

function UserDiary() {
  const { allnotes } = useSelector((store) => store.userDiary);
  console.log(allnotes);
  return (
    <div className={style.diary_notes_container}>
      {allnotes.length ? (
        allnotes.map((note) => (
          <div key={note.id} id={note.id} className={style.note}>
            <div>{note.createdAt.slice(0, 10)}</div>
            <div>{note.title}</div>
            {note.content}
          </div>
        ))
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}

export default UserDiary;
