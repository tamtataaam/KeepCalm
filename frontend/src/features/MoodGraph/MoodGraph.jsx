import React from 'react';
import { useNavigate } from 'react-router-dom';
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
import style from './MoodGraph.module.scss';

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
  const userMoodDate = userMood?.map((el) => el.createdAt.slice(5, 10));
  const userMoodId = userMood?.map((el) => el.moodId);
  const navigate = useNavigate();

  const mydata = {
    labels: userMoodDate,
    datasets: [
      {
        label: 'Ментальное состояние',
        data: userMoodId,
        backgroundColor: '#8E97FD',
      },
    ],
  };

  const options = {
    showLines: false,
    scales: {
      y: {
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className={style.main_div_container}>
      <div className={style.graph}>
        <h1 className={style.h2}>График настроения</h1>
        {userMoodDate.length && userMoodId.length ? (
          <Line data={mydata} options={options} />
        ) : (
          <h4>Выбери настроение, чтобы увидеть график</h4>
        )}

      </div>
      <button className={style.button} type="button" onClick={() => navigate('/mood')}>Изменить настроение</button>
      <button className={style.button} type="button" onClick={() => navigate('/welcometest')}>Пройти тест</button>

    </div>
  );
}
export default MoodGraph;
