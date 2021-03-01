import React from 'react';
import { func, string } from 'prop-types';
import Paragraph from './shared/Paragraph';

function CorrectAnswer(props) {
  const { nextCountry, answer } = props;
  return (
    <>
      <Paragraph wording={`Correct! The answer is ${answer}`} />
      <button type="button" onClick={() => nextCountry()}>
        Next
      </button>
    </>
  );
}

CorrectAnswer.propTypes = {
  nextCountry: func.isRequired,
  answer: string.isRequired,
};
export default CorrectAnswer;
