import React, { useState, useEffect } from 'react';
import './App.css';
import Paragraph from './Components/shared/Paragraph';
import Heading from './Components/shared/Heading';
import Game from './Components/Game';
import { getData } from './utils';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [game, setGame] = useState('pregame');
  const [countries, setCountries] = useState();
  const [country, setCountry] = useState();
  const [lives, setLives] = useState(10);
  const [score, setScore] = useState(0);

  function getCountries() {
    getData('https://restcountries.eu/rest/v2/')
      .then((res) => {
        setCountries(res);
      })
      .then(() => {
        setIsLoaded(true);
      });
  }
  function getRandomCountry() {
    // get length and choose a random number between it and 0
    if (!countries) {
      getCountries();
    } else {
      const randomNumber = Math.floor(Math.random() * countries.length + 1);
      setCountry(countries[randomNumber]);
    }
  }
  function startGame() {
    getCountries();
    getRandomCountry();
    setGame(true);
  }
  useEffect(() => {
    getCountries();
  }, [!countries]);
  function setDifficulty(amount) {
    setLives(amount);
  }
  function endGame() {
    setGame('ended');
  }
  function removeLife() {
    setLives(lives - 1);
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }
  if (game === 'pregame') {
    return (
      <div className="App">
        <Heading wording="Guess the country" />
        <div className="container">
          <Paragraph wording="no countries whoops" />
          <div id="difficulties">
            <Paragraph wording="Select the amount of lives you want" />
            <button type="button" onClick={() => setDifficulty(10)}>
              10 lives
            </button>
            <button type="button" onClick={() => setDifficulty(5)}>
              5 lives
            </button>
            <button type="button" onClick={() => setDifficulty(3)}>
              3 lives
            </button>
            <button type="button" onClick={() => setDifficulty(1)}>
              One life
            </button>
          </div>
          <button type="button" onClick={startGame}>
            Start Game
          </button>
        </div>
      </div>
    );
  }
  if (game === 'ended') {
    return (
      <div className="App">
        <Heading wording="Guess the country" />
        <div className="container">
          <Paragraph wording={`Game over, your score was ${score}`} />
        </div>
      </div>
    );
  }
  if (game && lives > 0) {
    return (
      <div className="App">
        <Heading wording="Guess the country" />
        <div className="container">
          <Game
            name={country.name}
            flag={country.flag}
            newCountry={getRandomCountry}
            lives={lives}
            removeLife={removeLife}
            endGame={endGame}
            score={score}
            setScore={setScore}
          />
        </div>
      </div>
    );
  }
}

export default App;
