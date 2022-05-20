import React from 'react';
import PropTypes from 'prop-types';

function CharacteristicsButtons({ characteristic }) {
  let capitalCharacteristic = characteristic;
  capitalCharacteristic =
    capitalCharacteristic.charAt(0).toUpperCase() +
    capitalCharacteristic.slice(1);
  // capitalizes first letter of the characteristic
  return (
    <div className={`${characteristic}-char`}>
      <p className="char-words">{capitalCharacteristic}</p>
      <input type="radio" value="1" name={characteristic} />
      <input type="radio" value="2" name={characteristic} />
      <input type="radio" value="3" name={characteristic} />
      <input type="radio" value="4" name={characteristic} />
      <input type="radio" value="5" name={characteristic} />
    </div>
  );
}

CharacteristicsButtons.propTypes = {
  characteristic: PropTypes.string.isRequired,
};

export default CharacteristicsButtons;
