import React from 'react';
import style from './UserDiary.module.scss';

function OneNote({ note }) {
  return (
    <>
      <div key={note.id} id={note.id} className={style.note}>
        <div>{note.createdAt.slice(0, 10)}</div>
        <div>{note.title}</div>
      </div>
      <button type="button">Delete</button>
      <button type="button">Change</button>
    </>
  );
}

export default OneNote;
