import React from 'react';
import PropTypes from 'prop-types';

export default function Sliders({ average, char }) {
  const reference = {
    Fit: { 1: 'Runs tight', 3: 'Perfect', 5: 'Runs long' },
    Length: { 1: 'Runs short', 3: 'Perfect', 5: 'Runs long' },
    Comfort: { 1: 'Uncomfortable', 3: 'Ok', 5: 'Perfect' },
    Quality: { 1: 'Poor', 3: 'What I expected', 5: 'Perfect' },
    Size: { 1: 'A size too small', 3: 'Perfect', 5: 'A size too wide' },
    Width: { 1: 'Too narrow', 3: 'Perfect', 5: 'Too wide' },
  };
  return (
    <div className="sliders-container">
      <span className="characteristic-name">{char}</span>
      <br />
      <input
        type="range"
        min="100"
        max="500"
        value={Number(average) * 100}
        className="slider"
        disabled
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.8em',
        }}
      >
        <span>{reference[char][1]}</span>
        <span>{reference[char][3]}</span>
        <span>{reference[char][5]}</span>
      </div>
    </div>
  );
}

Sliders.propTypes = {
  average: PropTypes.string.isRequired,
  char: PropTypes.string.isRequired,
};
