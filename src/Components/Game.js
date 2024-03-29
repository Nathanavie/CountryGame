import React, { useState } from 'react';
import { shape, string, func, number } from 'prop-types';
import Flag from './shared/Flag';
import Paragraph from './shared/Paragraph';
import Button from './shared/Button';
import GuessCountry from './GuessCountry';
import CorrectAnswer from './CorrectAnswer';

function Game(props) {
  const {
    name,
    altSpellings,
    newCountry,
    flag,
    lives,
    removeLife,
    endGame,
    score,
    setScore,
  } = props;
  const answers = [name, ...altSpellings];
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
    const answersArr = answers.map((answer) => answer.toLowerCase());
    if (!guess) {
      return;
    }
    if (answersArr.includes(guess.toLowerCase())) {
      setScore((currScore) => currScore + 1);
      setCorrect(true);
    } else {
      removeLife();
      if (lives === 1) {
        endGame();
      }
    }
    setGuess('');
  }
  function nextCountry() {
    setCorrect(false);
    getNextCountry();
  }
  return (
    <div id="gameBoard">
      <Paragraph wording={`Score: ${score}`} />
      <Paragraph wording={`Lives remaining: ${lives}`} />
      <Flag flag={flag} />
      {!correct ? (
        <>
          <GuessCountry
            checkAnswer={checkAnswer}
            handleChange={handleChange}
            guess={guess}
          />
          <Button wording="Skip this country" handleClick={nextCountry} />
        </>
      ) : (
        <CorrectAnswer nextCountry={nextCountry} answer={name} />
      )}
    </div>
  );
}

Game.propTypes = {
  name: string.isRequired,
  altSpellings: shape.isRequired,
  newCountry: func.isRequired,
  flag: string.isRequired,
  lives: number.isRequired,
  score: number.isRequired,
  setScore: func.isRequired,
  removeLife: func.isRequired,
  endGame: func.isRequired,
};

export default Game;
