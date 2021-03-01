import React from 'react';
import { string } from 'prop-types';

function Paragraph(props) {
  const { wording } = props;
  return <p>{wording}</p>;
}

Paragraph.propTypes = {
  wording: string.isRequired,
};

export default Paragraph;
