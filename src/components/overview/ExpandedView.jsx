import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompress } from '@fortawesome/free-solid-svg-icons';
import ExpandedIcons from './ExpandedIcons';

export default function ExpandedView({
  changeImgView,
  currPhotoUrl,
  photos,
  setCurrImgIdx,
  currImgIdx,
}) {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    setIsZoomed((prev) => !prev);
  };

  const handleMouseEnter = (e) => {
    if (isZoomed) {
      console.log('onMouseEnter', e.clientX, e.clientY);
    }
  };

  const handleMouseMove = (e) => {
    if (isZoomed) {
      console.log('onMouseMove', e.nativeEvent.clientX, e.nativeEvent.clientY);
    }
  };

  const handleMouseLeave = (e) => {
    if (isZoomed) {
      console.log('onMouseLeave', e.clientX, e.clientY);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        // padding: '0 2em',
      }}
    >
      <button
        type="button"
        style={{
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          objectFit: 'cover',
        }}
        onClick={handleImageClick}
      >
        <img
          src={currPhotoUrl}
          className="expanded-view--img"
          alt="big img"
          style={{
            // transform: 'scale(2.5)',
            padding: '4em',
            maxHeight: '80vh',
            minWidth: '0',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
      </button>
      <FontAwesomeIcon
        icon={faCompress}
        type="button"
        onClick={changeImgView}
        style={{
          position: 'absolute',
          top: '1em',
          right: '1em',
        }}
      />
      <ExpandedIcons
        photos={photos}
        currImgIdx={currImgIdx}
        setCurrImgIdx={setCurrImgIdx}
      />
    </div>
  );
}

ExpandedView.propTypes = {
  changeImgView: PropTypes.func.isRequired,
  setCurrImgIdx: PropTypes.func.isRequired,
  currPhotoUrl: PropTypes.string.isRequired,
  currImgIdx: PropTypes.number.isRequired,
  photos: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};
