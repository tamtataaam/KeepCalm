/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadSmiley, addSmiley } from '../../store/moodSlice/moodSlice';
import './mood.css';

function Mood() {
  const dispatch = useDispatch();
  // const userIdmoodId = useSelector((prev) => prev.mood);
  // console.log(userIdmoodId);
  const moodSm = useSelector((prev) => prev.mood.moodSmiley);

  const getSmiley = (id) => dispatch(addSmiley(id));
  useEffect(() => {
    dispatch(loadSmiley());
  }, []);
  return (
    <div className="smile_container">
      {moodSm.map((el) => (
        <div>
          <div onClick={() => getSmiley(el.id)}>
            <img className="smile_img" src={el.moodUrl} alt="фото_эмодзи" />
          </div>
          <div>{el.mood}</div>
        </div>
      ))}
    </div>
  );
}
export default Mood;
