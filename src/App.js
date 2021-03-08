import React, { useState, useEffect } from 'react';
import './App.css';
import Paragraph from './Components/shared/Paragraph';
import Heading from './Components/shared/Heading';
import Button from './Components/shared/Button';
import Game from './Components/Game';
import { getData } from './utils';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [game, setGame] = useState('pregame');
  const [countries, setCountries] = useState();
  const [country, setCountry] = useState();
  const [lives, setLives] = useState(10);
  const [score, setScore] = useState(0);
  const diffs = [
    {
      classes: 'active',
      id: '10lives',
      wording: '10 lives',
      value: '10',
    },
    { classes: '', id: '5lives', wording: '5 lives', value: '5' },
    { classes: '', id: '3lives', wording: '3 lives', value: '3' },
    { classes: '', id: 'onelife', wording: 'One life', value: '1' },
  ];

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
  function setDifficulty(e) {
    const { value, id } = e.target;
    document.getElementById('10lives').classList.remove('active');
    document.getElementById('5lives').classList.remove('active');
    document.getElementById('3lives').classList.remove('active');
    document.getElementById('onelife').classList.remove('active');
    document.getElementById(id).classList.add('active');
    setLives(Number(value));
  }
  function endGame() {
    setGame('ended');
  }
  function removeLife() {
    setLives((currLives) => currLives - 1);
  }
  function resetGame() {
    setLives(0);
    setScore(0);
    setGame('pregame');
  }
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (game === 'pregame') {
    return (
      <div className="App">
        <Heading wording="Guess the country" />
        <div className="container">
          <div id="difficulties">
            <Paragraph wording="Select the amount of lives you want" />
            {diffs.map((diff) => (
              <Button
                key={diff.wording}
                classes={diff.classes}
                id={diff.id}
                wording={diff.wording}
                handleClick={setDifficulty}
                value={diff.value}
              />
            ))}
          </div>
          <Button wording="Start Game" handleClick={startGame} />
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
          <Button wording="Reset game" handleClick={resetGame} />
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
            altSpellings={country.altSpellings}
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
