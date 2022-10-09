import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Story from './pages/Story';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/story" element={<Story />} />
    </Routes>
  );
}

export default App;
