import React from 'react';
import { getData } from '../utils';

function Game() {
  function getRandomCountry(list) {
    // get length and choose a random number between it and 0
    const randomNumber = Math.floor(Math.random() * list.length + 1);
    console.log(randomNumber);
  }

  function getCountries() {
    getData('https://restcountries.eu/rest/v2/').then((res) => {
      getRandomCountry(res);
    });
  }
  return (
    <div>
      <button type="button" onClick={getCountries}>
        click
      </button>
    </div>
  );
}

export default Game;
