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
      // style={
      //   {
      //     // backgroundColor: currStyle === i ? 'red' : 'transparent',
      //   }
      // }
    >
      <img
        src={style.iconUrl}
        alt={style.styleId}
        style={{
          width: '40px',
          height: '40px',
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
        gridTemplateColumns: 'repeat(8, 1fr)',
        rowGap: '1em',
        columnGap: '0.5em',
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
