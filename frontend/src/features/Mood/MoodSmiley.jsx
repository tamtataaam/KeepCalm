import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadSmiley } from '../../store/moodSlice/moodSlice';
import './mood.css';

function Mood() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSmiley());
  }, []);

  const moodSm = useSelector((prev) => prev.mood.moodSmiley);
  // console.log(moodSm);
  return (
    <div>
      {moodSm.map((el) => (
        <div className="smile_container">
          <img className="smile_img" src={el.moodUrl} alt="фото_эмодзи" />
          <div>{el.mood}</div>
        </div>
      ))}
    </div>
  );
}
export default Mood;
