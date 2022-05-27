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
  const [x, setX] = useState('0');
  const [y, setY] = useState('0');

  const handleImageClick = () => {
    setIsZoomed((prev) => !prev);
  };

  const handleMouseMove = (e) => {
    if (isZoomed) {
      // console.log('onMouseMove', e.nativeEvent.clientX, e.nativeEvent.clientY);
      setX(`${(0.5 * window.innerWidth - e.nativeEvent.clientX).toString()}`);
      setY(`${(0.5 * window.innerHeight - e.nativeEvent.clientY).toString()}`);
    }
  };

  return (
    <section
      id="expanded"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          position: 'relative',
          height: '100vh',
          width: '100vw',
          justifyContent: 'center',
          // padding: '0 2em',
        }}
      >
        {!isZoomed ? (
          <button
            type="button"
            style={{
              backgroundColor: 'transparent',
              borderColor: 'transparent',
              objectFit: 'cover',
              margin: '0',
              padding: '0',
            }}
            onClick={handleImageClick}
          >
            <img
              src={currPhotoUrl}
              className="expanded-view--standard"
              alt="big img"
              style={{
                // transform: 'scale(2.5)',
                // padding: '4em',
                maxHeight: '80vh',
                maxWidth: '60vw',
                minWidth: '0',
              }}
            />
          </button>
        ) : (
          <button
            type="button"
            style={{
              backgroundColor: 'transparent',
              borderColor: 'transparent',
              margin: '0',
              padding: '0',
              height: '100vh',
              width: '100vw',
              display: 'block',
              overflow: 'hidden',
            }}
            onClick={handleImageClick}
          >
            <img
              src={currPhotoUrl}
              className="expanded-view--zoomed"
              alt="big img"
              style={{
                transform: `scale(2.5)`,
                height: '500px',
                position: 'relative',
                top: `${y}px`,
                left: `${x}px`,
                verticalAlign: 'top',
              }}
              onMouseMove={handleMouseMove}
            />
          </button>
        )}
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
    </section>
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
