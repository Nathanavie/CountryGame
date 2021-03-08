import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { wording, handleClick, classes, id, value } = props;
  return (
    <button
      id={id}
      className={classes}
      type="button"
      onClick={handleClick}
      value={value}
    >
      {wording}
    </button>
  );
}

Button.propTypes = {
  wording: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  classes: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
};

Button.defaultProps = {
  classes: 'defaultBtn',
  id: '',
  value: '',
};

export default Button;
