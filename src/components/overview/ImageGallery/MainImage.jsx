import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function MainImage({ currPhotoUrl }) {
  const [className, setClassName] = useState('fade-in');

  useEffect(() => {
    setClassName('transparent');
    const timeoutId = setTimeout(() => {
      setClassName('fade-in');
    }, 400);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currPhotoUrl]);

  return (
    <img
      id="main-gallery--img"
      className={className}
      src={currPhotoUrl}
      alt="sample img"
    />
  );
}

MainImage.propTypes = {
  currPhotoUrl: PropTypes.string.isRequired,
};
