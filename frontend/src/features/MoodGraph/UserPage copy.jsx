import React, { useState, useEffect } from 'react';
// import LineChart from 'react-linechart';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
} from 'chart.js';
import { useSelector } from 'react-redux';

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

function userPage() {
  const userIdmoodId = useSelector((prev) => prev.mood.moodSmileyGraphFromBD);
  const moodOfUser = userIdmoodId.map((el) => el.data.map((e) => e.id));
  const moodOfUserDate = userIdmoodId.map(
    (el) =>
      el.data.map((e) => {
        const timeInMilesec = Date.parse(e.createdAt);
        const data = new Date(timeInMilesec);
        const dataDateNum = data.getDate();
        const dataMonth = data.getMonth() + 1;
        const dataYear = data.getFullYear();

        return `${dataDateNum}/${dataMonth}/${dataYear}`;
      })
    // return el;
  );
  // console.log(moodOfUser, 'moodOfUser');
  // console.log(moodOfUserDate, 'moodOfUserDate');
  // { x: 1, y: moodOfUser.flat()[0] },
  // { x: 2, y: moodOfUser.flat()[1] },
  // { x: 3, y: moodOfUser.flat()[2] },
  // { x: 4, y: moodOfUser.flat()[3] },
  // { x: 5, y: moodOfUser.flat()[4] },
  const [data, setData] = useState({
    // labels: ['январь', 'февраль', 'март', 'апрель'],
    labels: [
      moodOfUserDate[0],
      moodOfUserDate[1],
      moodOfUserDate[2],
      moodOfUserDate[3],
      moodOfUserDate[4],
    ],

    datasets: [
      {
        label: 'Ментальное состояние',
        data: [
          moodOfUser.flat()[0],
          moodOfUser.flat()[1],
          moodOfUser.flat()[2],
          moodOfUser.flat()[3],
          moodOfUser.flat()[4],
        ],
        backgroundColor: 'yellow',
      },
    ],
  });

  useEffect(() => {
    setData(data);
  }, [data]);

  // console.log(data);

  return (
    <div>
      {' '}
      {/* <LineChart width={600} height={400} data={data} />
      <div>
        {moodOfUserDate.map((el) => (
          <div>{el}</div>
        ))} */}
      {/* </div> */}
      {moodOfUser.length && moodOfUserDate.length ? (
        <Line data={data} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
export default userPage;
