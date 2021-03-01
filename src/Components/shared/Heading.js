import React from 'react';
import { string } from 'prop-types';

function Heading(props) {
  const { wording } = props;
  return <h1>{wording}</h1>;
}

Heading.propTypes = {
  wording: string.isRequired,
};

export default Heading;
