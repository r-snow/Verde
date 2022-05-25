import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export default function StyleSelector({ styles, currStyle, setCurrStyle }) {
  const handleStyleClick = (idx) => {
    setCurrStyle(idx);
  };

  const thumbnails = styles.map((style, i) => (
    <button
      className="style-thumbnail"
      type="button"
      key={nanoid()}
      onClick={() => handleStyleClick(i)}
      style={{
        borderColor: currStyle === i ? 'lightgrey' : 'transparent',
      }}
    >
      <img
        src={style.iconUrl}
        alt={style.styleId}
        style={{
          width: '30px',
          height: '30px',
          objectFit: 'cover',
          borderRadius: '50%',
        }}
      />
    </button>
  ));

  return (
    <section
      style={{
        marginBottom: '1em',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 50px)',
        rowGap: '1em',
      }}
    >
      {thumbnails}
    </section>
  );
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
