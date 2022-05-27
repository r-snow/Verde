import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import Thumbnails from './Thumbnails';

export default function ImageGallery({
  changeImgView,
  photos,
  currImgIdx,
  incrementIdx,
  decrementIdx,
  setCurrImgIdx,
}) {
  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        // width: '700px',
      }}
    >
      <Thumbnails
        photos={photos}
        currImgIdx={currImgIdx}
        setCurrImgIdx={setCurrImgIdx}
      />
      <div
        style={{
          position: 'relative',
          height: '500px',
          width: '500px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <a href="#expanded">
          <button
            type="button"
            className="main-image-btn"
            style={{
              backgroundColor: 'transparent',
              borderColor: 'transparent',
            }}
            onClick={changeImgView}
          >
            <img
              src={photos[currImgIdx].url}
              alt="sample img"
              style={{
                maxHeight: '500px',
                maxWidth: '390px',
              }}
            />
          </button>
        </a>
        {currImgIdx !== 0 && (
          <FontAwesomeIcon
            icon={faAngleLeft}
            type="button"
            onClick={decrementIdx}
            color="black"
            style={{
              position: 'absolute',
              top: '50%',
              left: '1em',
            }}
          />
        )}
        {currImgIdx !== photos.length - 1 && (
          <FontAwesomeIcon
            icon={faAngleRight}
            type="button"
            onClick={incrementIdx}
            color="black"
            style={{
              position: 'absolute',
              top: '50%',
              right: '1em',
            }}
          />
        )}
      </div>
    </section>
  );
}

ImageGallery.propTypes = {
  changeImgView: PropTypes.func.isRequired,
  currImgIdx: PropTypes.number.isRequired,
  incrementIdx: PropTypes.func.isRequired,
  decrementIdx: PropTypes.func.isRequired,
  setCurrImgIdx: PropTypes.func.isRequired,
  photos: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};
