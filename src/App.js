import React, { useState } from 'react';
import './App.css';
import Paragraph from './Components/shared/Paragraph';
import Heading from './Components/shared/Heading';
import Game from './Components/Game';

function App() {
  const [game, setGame] = useState(false);
  if (!game) {
    return (
      <div>
        <Paragraph wording="no countries whoops" />
        <button type="button" onClick={() => setGame(true)}>
          grab em
        </button>
      </div>
    );
  }
  return (
    <div className="container">
      <Heading wording="Guess the country" />
      <Game />;
    </div>
  );
}

export default App;
