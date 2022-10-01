import React from 'react';
import LineChart from 'react-linechart';
// import { useSelector } from 'react-redux';

function userPage() {
<<<<<<< HEAD
  const userIdmoodId = useSelector((prev) => prev.mood.moodSmileyGraph);
  console.log(userIdmoodId);
=======
  // const userIdmoodId = useSelector((prev) => prev);
  // console.log(userIdmoodId);
>>>>>>> ce32f0f5ff51d28fadd0bd79f5616e9fbf6325c6
  const data = [
    {
      color: 'steelblue',
      points: [
        { x: 1, y: 2 },
        { x: 3, y: 5 },
        { x: 8, y: 0 },
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
