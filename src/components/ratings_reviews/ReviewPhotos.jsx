import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ReviewPhotos({ photo }) {
  const [popUpPhoto, openPicture] = useState(false);

  const handleOpenPhoto = () => {
    openPicture(!popUpPhoto);
  };
  return (
    <div>
      <img
        src={photo.url}
        key={photo.id}
        alt="fashion-pictures"
        className="review-thumbnails"
        role="presentation"
        onClick={handleOpenPhoto}
        onKeyPress={handleOpenPhoto}
      />
      {popUpPhoto ? (
        <div className="full-photo-modal-container">
          <div
            className="modal-overlay"
            onClick={handleOpenPhoto}
            role="button"
            tabIndex={0}
            onKeyDown={handleOpenPhoto}
            aria-label="close modal with overlay"
          />
          <img
            src={photo.url}
            key={photo.id}
            alt="fashion-pictures"
            className="review-photo-modal"
            role="presentation"
            onClick={(event) => event.stopPropagation()}
            onKeyPress={handleOpenPhoto}
          />
        </div>
      ) : null}
    </div>
  );
}

ReviewPhotos.propTypes = {
  photo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};

export default ReviewPhotos;
