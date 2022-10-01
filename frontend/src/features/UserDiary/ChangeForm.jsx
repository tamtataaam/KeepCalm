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
      onSubmit={() => {
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
      <div>Название</div>
      <input
        type="text"
        value={changeInputTitle}
        onChange={(event) => setChangeIputTitle(event.target.value)}
      />
      <div>Текст</div>
      <input
        type="text"
        value={changeInputContent}
        onChange={(event) => setChangeInputContent(event.target.value)}
      />
      <div>
        <button type="submit" className={style.save_changes_button}>
          Сохранить изменения
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
    </form>
  );
}

export default ChangeForm;
