import React from 'react';
import PropTypes from 'prop-types';

export default function ExpandedView({ changeImgView }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <img
        src="https://tracksmith-media.imgix.net/Spring22-Mens-Twilight-Tee-Denim.png?auto=format,compress&crop=faces&dpr=2&fit=crop&h=640&w=640"
        alt="sample img"
        style={{
          padding: '4em',
          maxWidth: '50%',
        }}
      />
      <button
        type="button"
        onClick={changeImgView}
        style={{
          position: 'absolute',
          top: '1em',
          right: '1em',
        }}
      >
        Main View
      </button>
    </div>
  );
}

ExpandedView.propTypes = {
  changeImgView: PropTypes.func.isRequired,
};
