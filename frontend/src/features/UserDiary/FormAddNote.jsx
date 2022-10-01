import React from 'react';
import style from './UserDiary.module.scss';

function FormAddNote() {
  return (
    <form>
      <input className={style.input} />
      <button type="submit"> add note</button>
    </form>
  );
}

export default FormAddNote;
