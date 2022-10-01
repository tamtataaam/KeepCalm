import React from 'react';
import LineChart from 'react-linechart';
import { useSelector } from 'react-redux';

function userPage() {
  const userIdmoodId = useSelector((prev) => prev.mood.moodSmileyGraphFromBD);
  const moodOfUser = userIdmoodId.map((el) => el.data.map((e) => e.id));
  const moodOfUserDate = userIdmoodId.map((el) =>
    el.data.map((e) => e.createdAt)
  );
  console.log(moodOfUserDate);

  const data = [
    {
      color: 'steelblue',
      points: [
        { x: 1, y: moodOfUser.flat()[0] },
        { x: 2, y: moodOfUser.flat()[1] },
        { x: 3, y: moodOfUser.flat()[2] },
        { x: 4, y: moodOfUser.flat()[3] },
        { x: 5, y: moodOfUser.flat()[4] },
      ],
    },
  ];
  return (
    <div>
      {' '}
      <LineChart width={600} height={400} data={data} />
    </div>
  );
}
export default userPage;
