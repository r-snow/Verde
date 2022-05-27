import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircle,
  faCaretRight,
  faCaretLeft,
} from '@fortawesome/free-solid-svg-icons';

import { nanoid } from 'nanoid';

export default function ExpandedIcons({ photos, currImgIdx, setCurrImgIdx }) {
  const iconElements = photos.map((photo, i) => (
    <FontAwesomeIcon
      icon={faCircle}
      size="lg"
      color="black"
      style={{
        opacity: currImgIdx === i ? '1' : '0.5',
      }}
      key={nanoid()}
      type="button"
      onClick={() => setCurrImgIdx(i)}
    />
  ));

  const displayedIconElements = iconElements.filter((element, i) => {
    if (currImgIdx <= 6 && i <= 6) {
      return true;
    }
    if (currImgIdx > 6 && i >= currImgIdx - 6 && i <= currImgIdx) {
      return true;
    }
    return false;
  });

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1em',
        alignItems: 'center',
        position: 'absolute',
        bottom: '2em',
      }}
    >
      {currImgIdx !== 0 && (
        <FontAwesomeIcon
          icon={faCaretLeft}
          size="lg"
          color="black"
          style={{
            opacity: '0.5',
          }}
          onClick={() => {
            setCurrImgIdx((prev) => prev - 1);
          }}
        />
      )}
      {displayedIconElements}
      {currImgIdx !== photos.length - 1 && (
        <FontAwesomeIcon
          icon={faCaretRight}
          size="lg"
          color="black"
          style={{
            opacity: '0.5',
          }}
          onClick={() => {
            setCurrImgIdx((prev) => prev + 1);
          }}
        />
      )}
    </section>
  );
}

ExpandedIcons.propTypes = {
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
