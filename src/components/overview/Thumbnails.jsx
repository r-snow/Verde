import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export default function Thumbnails({ photos, currImgIdx }) {
  const thumbnailElements = photos.map((photo, i) => (
    <img
      key={nanoid()}
      src={photo.thumbnail_url}
      alt="thumbnail"
      style={{
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        border: 'grey solid 2px',
        borderColor: currImgIdx === i ? 'grey' : 'transparent',
      }}
    />
  ));
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.4em',
      }}
    >
      {thumbnailElements}
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
};
