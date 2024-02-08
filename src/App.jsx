import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FirstPage from './components/FirstPage';
import GamePage from './components/GamePage';
import Resultpage  from './components/Resultpage';

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FirstPage/>} />
        <Route path="/game" element={<GamePage/>} />
        <Route path="/result" element={<Resultpage />} />
      </Routes>
    </div>
  );
};

export default App;