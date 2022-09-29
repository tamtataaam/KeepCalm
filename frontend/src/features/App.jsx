import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import UserPage from './UserPage/UserPage';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/:login" element={<UserPage />} />

        {/* <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notfound" element={<Error404 />} />
        <Route path="*" element={<Error404 />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
