import React from 'react';
import { useSelector } from 'react-redux';

function Mood() {
  const moodSm = useSelector((prev) => prev.mood);
  console.log(moodSm);
  return <div />;
}
export default Mood;
