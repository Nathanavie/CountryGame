import React, { useState } from 'react';
import { string, func, number } from 'prop-types';
import Flag from './shared/Flag';
import Paragraph from './shared/Paragraph';
import GuessCountry from './GuessCountry';
import CorrectAnswer from './CorrectAnswer';

function Game(props) {
  const {
    name,
    newCountry,
    flag,
    lives,
    removeLife,
    endGame,
    score,
    setScore,
  } = props;
  const [guess, setGuess] = useState('');
  const [correct, setCorrect] = useState(false);

  function handleChange(e) {
    const { value } = e.target;
    setGuess(value);
  }

  function getNextCountry() {
    setGuess('');
    newCountry();
  }

  function checkAnswer() {
    if (!guess) {
      return;
    }
    if (name.toLowerCase() === guess.toLowerCase()) {
      setScore(score + 1);
      setCorrect(true);
      getNextCountry();
    } else {
      console.log(
        `answer given was ${guess}, when it the correct answer is ${name}`
      );
      if (lives === 1) {
        console.log('lost the last life!!');
        removeLife();
        endGame();
      } else {
        removeLife();
      }
    }
  }
  function nextCountry() {
    setCorrect(false);
    getNextCountry();
  }
  return (
    <div>
      <Paragraph wording={`Score: ${score}`} />
      <Paragraph wording={`Lives remaining: ${lives}`} />
      <Flag flag={flag} />
      {!correct ? (
        <GuessCountry
          checkAnswer={checkAnswer}
          handleChange={handleChange}
          guess={guess}
        />
      ) : (
        <CorrectAnswer nextCountry={nextCountry} answer={name} />
      )}
    </div>
  );
}

Game.propTypes = {
  name: string.isRequired,
  newCountry: func.isRequired,
  flag: string.isRequired,
  lives: number.isRequired,
  score: number.isRequired,
  setScore: func.isRequired,
  removeLife: func.isRequired,
  endGame: func.isRequired,
};

export default Game;
