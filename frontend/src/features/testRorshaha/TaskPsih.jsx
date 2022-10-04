import React from 'react';
import { useNavigate } from 'react-router-dom';

function TaskPsih() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Обязательно обратись к врачу!</h1>
      <button onClick={() => navigate('/')} type="button">
        На главную
      </button>
    </div>
  );
}
export default TaskPsih;
