import React from 'react';
import { string } from 'prop-types';

function Heading(props) {
  const { wording } = props;
  return (
    <header>
      <h1>{wording}</h1>
    </header>
  );
}

Heading.propTypes = {
  wording: string.isRequired,
};

export default Heading;
