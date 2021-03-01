import React from 'react';
import { func, string } from 'prop-types';
import Input from './shared/Input';

function GuessCountry(props) {
  const { checkAnswer, handleChange, guess } = props;

  return (
    <>
      <button type="button" onClick={checkAnswer}>
        Check
      </button>
      <Input handleChange={handleChange} value={guess} type="text" />
    </>
  );
}

GuessCountry.propTypes = {
  checkAnswer: func.isRequired,
  handleChange: func.isRequired,
  guess: string.isRequired,
};

export default GuessCountry;
