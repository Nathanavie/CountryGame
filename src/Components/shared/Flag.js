import React from 'react';
import { string } from 'prop-types';

function Flag(props) {
  const { flag } = props;
  return <img alt="Flag in question" src={flag} />;
}

Flag.propTypes = {
  flag: string.isRequired,
};

export default Flag;
