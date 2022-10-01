import React from 'react';
//  { useEffect }

import { useSelector } from 'react-redux';
// import { loadUserDiaryNotesAsync } from '../../store/userDiarySlice/userDiarySlice';
import OneNote from './OneNote';
import FormAddNote from './FormAddNote';
import style from './UserDiary.module.scss';

function UserDiary() {
  // const dispatch = useDispatch();
  const { allnotes } = useSelector((store) => store.userDiary);

  // useEffect(() => {
  //   dispatch(loadUserDiaryNotesAsync());
  // }, [allnotes]);

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
