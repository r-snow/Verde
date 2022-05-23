import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function AnswerPhotos({ photo }) {
  const [openModal, setOpenModal] = useState(false);

  const handlePhotoClick = () => {
    setOpenModal(!openModal);
  };

  return (
    <div>
      <img
        className="answer-photo"
        src={photo}
        alt="product"
        role="presentation"
        onClick={handlePhotoClick}
        onKeyPress={handlePhotoClick}
      />
      {openModal ? (
        <div className="answer-photo-modal ">
          <button
            style={{ position: 'absolute', top: '1em', right: '1em' }}
            className="enlarged-answer-photo-close"
            type="button"
            onClick={handlePhotoClick}
          >
            X
          </button>
          <img
            className="enlarged-answer-photo-modal"
            src={photo}
            role="presentation"
            alt="product-enlarged"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </div>
  );
}

AnswerPhotos.propTypes = {
  photo: PropTypes.string.isRequired,
};
