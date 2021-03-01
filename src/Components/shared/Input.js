import React from 'react';
import { string, func } from 'prop-types';

function Input(props) {
  const { handleChange, value, type } = props;
  return <input onChange={handleChange} type={type} value={value} />;
}

Input.propTypes = {
  handleChange: func.isRequired,
  value: string.isRequired,
  type: string.isRequired,
};

export default Input;
