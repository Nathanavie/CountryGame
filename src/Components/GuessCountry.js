import React from 'react';
import { func, string } from 'prop-types';
import Input from './shared/Input';
import Button from './shared/Button';

function GuessCountry(props) {
  const { checkAnswer, handleChange, guess } = props;

  return (
    <>
      <Input
        handleChange={handleChange}
        value={guess}
        type="text"
        placeholder="Enter your guess here..."
      />
      <Button wording="Submit Answer" handleClick={checkAnswer} />
    </>
  );
}

GuessCountry.propTypes = {
  checkAnswer: func.isRequired,
  handleChange: func.isRequired,
  guess: string.isRequired,
};

export default GuessCountry;
