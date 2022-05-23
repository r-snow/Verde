import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export default function Thumbnails({ photos, currImgIdx, setCurrImgIdx }) {
  const thumbnailElements = photos.map((photo, i) => (
    <button
      key={nanoid()}
      type="button"
      onClick={() => setCurrImgIdx(i)}
      style={{
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        padding: '0',
      }}
    >
      <img
        src={photo.thumbnail_url}
        alt="thumbnail"
        style={{
          width: '50px',
          height: '50px',
          objectFit: 'cover',
          border: 'grey solid 2px',
          borderColor: currImgIdx === i ? 'grey' : 'transparent',
        }}
      />
    </button>
  ));
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
      }}
    >
      {currImgIdx !== 0 && (
        <button
          type="button"
          onClick={() => {
            setCurrImgIdx((prev) => prev - 1);
          }}
        >
          Up
        </button>
      )}
      {thumbnailElements}
      {currImgIdx !== photos.length - 1 && (
        <button
          type="button"
          onClick={() => {
            setCurrImgIdx((prev) => prev + 1);
          }}
        >
          Down
        </button>
      )}
    </section>
  );
}

Thumbnails.propTypes = {
  photos: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  currImgIdx: PropTypes.number.isRequired,
  setCurrImgIdx: PropTypes.func.isRequired,
};
