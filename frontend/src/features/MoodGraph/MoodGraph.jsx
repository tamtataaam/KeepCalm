import React, { useEffect, useState } from 'react';
// import LineChart from 'react-linechart';
import { useSelector } from 'react-redux';
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
import LoadingPage from '../LoadingPage/LoadingPage';

ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement
);

function MoodGraph() {
  const userMood = useSelector((state) => state.mood.userMood);
  const userMoodDate = userMood?.map((el) => el.createdAt.slice(0, 10));
  const userMoodId = userMood?.map((el) => el.moodId);

  const [data, setData] = useState({
    labels: userMoodDate,
    datasets: [
      {
        label: 'Ментальное состояние',
        data: userMoodId,
        backgroundColor: '#8E97FD',
      },
    ],
    // options: {
    //   showLines: false,
    //   scales: {
    //     yAxes: [{
    //       ticks: {
    //         beginAtZero: true
    //       }
    //     }]
    //   }
    // }
  });

  useEffect(() => {
    setData(data);
  }, [data]);

  return (
    <div>
      {userMoodDate && userMoodId ? (
        <Line data={data} />
      ) : (
        <LoadingPage />
      )}
    </div>
  );
}
export default MoodGraph;
