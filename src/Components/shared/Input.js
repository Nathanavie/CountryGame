import React from 'react';
import { string, func } from 'prop-types';

function Input(props) {
  const { handleChange, value, type, placeholder } = props;
  return (
    <input
      onChange={handleChange}
      type={type}
      value={value}
      placeholder={placeholder}
    />
  );
}

Input.propTypes = {
  handleChange: func.isRequired,
  value: string.isRequired,
  type: string.isRequired,
  placeholder: string,
};

Input.defaultProps = {
  placeholder: 'Enter text here...',
};

export default Input;
