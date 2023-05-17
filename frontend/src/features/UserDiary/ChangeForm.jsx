import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeOneNoteAsync } from '../../store/userDiarySlice/userDiarySlice';
import style from './UserDiary.module.scss';

function ChangeForm({ note, flagChange, setFlagChange }) {
  const dispatch = useDispatch();
  const [changeInputTitle, setChangeIputTitle] = useState(note.title);
  const [changeInputContent, setChangeInputContent] = useState(note.content);
  const userId = useSelector((store) => store.user.data.id);
  return (
    <form
      style={flagChange ? { display: 'none' } : { display: 'inline' }}
      onSubmit={(e) => {
        e.preventDefault();
        setFlagChange((prev) => !prev);
        dispatch(
          changeOneNoteAsync({
            noteId: note.id,
            userId,
            changeInputTitle,
            changeInputContent,
          })
        );
      }}
    >

      <input
        className={style.change_input}
        type="text"
        value={changeInputTitle}
        placeholder="Название записи..."
        onChange={(event) => setChangeIputTitle(event.target.value)}
      />

      <textarea
        className={style.change_textarea}
        type="text"
        value={changeInputContent}
        onChange={(event) => setChangeInputContent(event.target.value)}
      />
      <div className={style.buttons_container}>
        <div>
          <button type="submit" className={style.save_changes_button}>
            Сохранить
          </button>
        </div>
        <div>
          <button
            style={flagChange ? { display: 'none' } : { display: 'inline' }}
            type="button"
            className={style.save_changes_button}
            onClick={() => setFlagChange((prev) => !prev)}
          >
            Выйти
          </button>
        </div>
      </div>
    </form>
  );
}

export default ChangeForm;
