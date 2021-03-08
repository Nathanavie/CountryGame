import React from 'react';
import { func, string } from 'prop-types';
import Paragraph from './shared/Paragraph';
import Button from './shared/Button';

function CorrectAnswer(props) {
  const { nextCountry, answer } = props;
  return (
    <>
      <Paragraph wording={`Correct! The answer is ${answer}`} />
      <Button wording="Next" handleClick={() => nextCountry()} />
    </>
  );
}

CorrectAnswer.propTypes = {
  nextCountry: func.isRequired,
  answer: string.isRequired,
};
export default CorrectAnswer;
