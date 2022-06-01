import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export default function StyleSelector({ styles, currStyle, setCurrStyle }) {
  const handleStyleClick = (idx) => {
    setCurrStyle(idx);
  };

  const thumbnails = styles.map((style, i) => (
    <button
      className={
        currStyle === i ? 'style-thumbnail selected-style' : 'style-thumbnail'
      }
      type="button"
      key={nanoid()}
      onClick={() => handleStyleClick(i)}
    >
      <img
        src={style.iconUrl}
        alt={style.styleId}
        className="style-selector--thumbnails"
      />
    </button>
  ));

  return <section className="style-selector--container">{thumbnails}</section>;
}

StyleSelector.propTypes = {
  styles: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  currStyle: PropTypes.number.isRequired,
  setCurrStyle: PropTypes.func.isRequired,
};
