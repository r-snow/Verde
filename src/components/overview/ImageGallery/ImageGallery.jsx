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
    <section className="main-gallery--container">
      <Thumbnails
        photos={photos}
        currImgIdx={currImgIdx}
        setCurrImgIdx={setCurrImgIdx}
      />
      <FontAwesomeIcon
        icon={faAngleLeft}
        size="xl"
        type="button"
        onClick={() => {
          if (currImgIdx) {
            decrementIdx();
          }
        }}
        color={currImgIdx === 0 ? 'transparent' : 'black'}
        style={{ marginLeft: '1em' }}
      />
      <div className="main-gallery--frame">
        <a href="#expanded">
          <button
            type="button"
            className="main-image-btn"
            onClick={changeImgView}
          >
            <img
              id="main-gallery--img"
              src={photos[currImgIdx].url}
              alt="sample img"
            />
          </button>
        </a>
      </div>
      <FontAwesomeIcon
        icon={faAngleRight}
        size="xl"
        type="button"
        onClick={() => {
          if (currImgIdx !== photos.length - 1) {
            incrementIdx();
          }
        }}
        color={currImgIdx === photos.length - 1 ? 'transparent' : 'black'}
      />
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
