import React from 'react';
import PropTypes from 'prop-types';

export default function ExpandedView({ changeImgView, currPhotoUrl }) {
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
        src={currPhotoUrl}
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
  currPhotoUrl: PropTypes.string.isRequired,
};
