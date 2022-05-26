import React from 'react';
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
      <img
        src={currPhotoUrl}
        alt="big img"
        style={{
          padding: '4em',
          maxHeight: '80vh',
          minWidth: '0',
        }}
      />
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
