import React from 'react';
import style from './UserDiary.module.scss';

function FormAddNote() {
  return (
    <form>
      <h2>Добавить новую запись</h2>
      <div>Введи название</div>
      <input type="text" name="note_title" placeholder="добавить название" />
      <div>Введи текст</div>
      <input className={style.input} />
      <button type="submit"> добавить</button>
    </form>
  );
}

export default FormAddNote;
