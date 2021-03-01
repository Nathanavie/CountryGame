import React from 'react';
import PropTypes from 'prop-types';

function Countries(props) {
  const { countries } = props;
  const places = countries.map((val) => (
    <div key={val.name}>
      <p>Name: {val.name}</p>
      <p>Capital: {val.capital}</p>
      <p>Native Name: {val.nativeName}</p>
    </div>
  ));
  return <div className="container">{places}</div>;
}

Countries.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Countries;
