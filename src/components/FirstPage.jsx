import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const FirstPage = () => {
  return (
    <div className="first">
      <h1>Quiz Game</h1>
      <Link to="/game">
        <button >Play</button>
      </Link>
    </div>
  );
}

export default FirstPage;