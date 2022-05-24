import React from 'react';
import PropTypes from 'prop-types';
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
        {currImgIdx !== 0 && (
          <button
            type="button"
            onClick={decrementIdx}
            style={{
              position: 'absolute',
              top: '50%',
              left: '1em',
            }}
          >
            Prev
          </button>
        )}
        {currImgIdx !== photos.length - 1 && (
          <button
            type="button"
            onClick={incrementIdx}
            style={{
              position: 'absolute',
              top: '50%',
              right: '1em',
            }}
          >
            Next
          </button>
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
