import React from 'react';
import PropTypes from 'prop-types';

function CharacteristicsButtons({ characteristic, handleRadioChange }) {
  const capitalCharacteristic =
    characteristic.charAt(0).toUpperCase() + characteristic.slice(1);
  // capitalizes first letter of the characteristic

  const changeRating = (event) => {
    handleRadioChange(capitalCharacteristic, event.target.value);
  };

  return (
    <div
      className={`${characteristic}-char`}
      style={{
        backgroundColor: '#C2DED1',
        borderRadius: '5em 0em',
        padding: '1rem 5rem',
        margin: '1rem 0rem',
        minWidth: '40rem',
      }}
    >
      <p className="char-words">{capitalCharacteristic}</p>
      <input
        type="radio"
        value="1"
        name={characteristic}
        onChange={changeRating}
        style={{ margin: '1.2rem' }}
      />
      1
      <input
        type="radio"
        value="2"
        name={characteristic}
        onChange={changeRating}
        style={{ margin: '1.2rem' }}
      />
      2
      <input
        type="radio"
        value="3"
        name={characteristic}
        onChange={changeRating}
        style={{ margin: '1.2rem' }}
      />
      3
      <input
        type="radio"
        value="4"
        name={characteristic}
        onChange={changeRating}
        style={{ margin: '1.2rem' }}
      />
      4
      <input
        type="radio"
        value="5"
        name={characteristic}
        onChange={changeRating}
        style={{ margin: '1.2rem' }}
      />
      5
    </div>
  );
}

CharacteristicsButtons.propTypes = {
  characteristic: PropTypes.string.isRequired,
  handleRadioChange: PropTypes.func.isRequired,
};

export default CharacteristicsButtons;
