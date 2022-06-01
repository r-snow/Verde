import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCompress,
  faAngleRight,
  faAngleLeft,
} from '@fortawesome/free-solid-svg-icons';
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
      setX(`${(0.5 * window.innerWidth - e.nativeEvent.clientX).toString()}`);
      setY(`${(0.5 * window.innerHeight - e.nativeEvent.clientY).toString()}`);
    }
  };

  return (
    <section id="expanded">
      {currImgIdx !== 0 && !isZoomed && (
        <FontAwesomeIcon
          icon={faAngleLeft}
          type="button"
          color="black"
          size="lg"
          className="expanded-view--arrows expanded-view--left-carat"
          onClick={() => {
            setCurrImgIdx((prev) => prev - 1);
          }}
        />
      )}
      {currImgIdx !== photos.length - 1 && !isZoomed && (
        <FontAwesomeIcon
          icon={faAngleRight}
          type="button"
          color="black"
          size="lg"
          className="expanded-view--arrows expanded-view--right-carat"
          onClick={() => {
            setCurrImgIdx((prev) => prev + 1);
          }}
        />
      )}
      <div className="expanded-view--frame">
        {!isZoomed ? (
          <button
            className="expanded-view--default-btn"
            type="button"
            onClick={handleImageClick}
          >
            <img
              src={currPhotoUrl}
              className="expanded-view--standard"
              alt="big img"
            />
          </button>
        ) : (
          <button
            className="expanded-view--zoomed-btn"
            type="button"
            onClick={handleImageClick}
          >
            <img
              src={currPhotoUrl}
              className="expanded-view--zoomed"
              alt="big img"
              style={{
                top: `${y}px`,
                left: `${x}px`,
              }}
              onMouseMove={handleMouseMove}
            />
          </button>
        )}
        {!isZoomed && (
          <a
            href="#top"
            onClick={() => {
              changeImgView();
            }}
          >
            <FontAwesomeIcon
              className="expanded-view--compress"
              icon={faCompress}
              color="black"
              type="button"
              size="lg"
            />
          </a>
        )}
        {!isZoomed && (
          <ExpandedIcons
            photos={photos}
            currImgIdx={currImgIdx}
            setCurrImgIdx={setCurrImgIdx}
          />
        )}
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
