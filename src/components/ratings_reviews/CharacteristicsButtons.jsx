import React from 'react';
import PropTypes from 'prop-types';

function CharacteristicsButtons({ characteristic, handleRadioChange }) {
  const capitalCharacteristic =
    characteristic.charAt(0).toUpperCase() + characteristic.slice(1);
  // capitalizes first letter of the characteristic

  const changeRating = (event) => {
    handleRadioChange(characteristic, event.target.value);
  };

  return (
    <div className={`${characteristic}-char`}>
      <p className="char-words">{capitalCharacteristic}</p>
      <input
        type="radio"
        value="1"
        name={characteristic}
        onChange={changeRating}
      />
      <input
        type="radio"
        value="2"
        name={characteristic}
        onChange={changeRating}
      />
      <input
        type="radio"
        value="3"
        name={characteristic}
        onChange={changeRating}
      />
      <input
        type="radio"
        value="4"
        name={characteristic}
        onChange={changeRating}
      />
      <input
        type="radio"
        value="5"
        name={characteristic}
        onChange={changeRating}
      />
    </div>
  );
}

CharacteristicsButtons.propTypes = {
  characteristic: PropTypes.string.isRequired,
  handleRadioChange: PropTypes.func.isRequired,
};

export default CharacteristicsButtons;
