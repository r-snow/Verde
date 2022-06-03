import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

export default function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateIndex = (newIndex) => {
    let updatedIndex = newIndex;
    if (updatedIndex < 0) {
      updatedIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children) - 2) {
      updatedIndex = 0;
    }

    setActiveIndex(updatedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 5000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div className="carousel">
      {activeIndex !== 0 && (
        <FontAwesomeIcon
          className="carousel-arrow"
          icon={faAngleLeft}
          size="xl"
          type="button"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        />
      )}
      <div className="viewport">
        <div
          className="inner"
          style={{
            transform: `translateX(-${activeIndex * 261}px)`,
            whiteSpace: 'nowrap',
            transition: 'transform 0.5s',
          }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {React.Children.map(children, (child) => React.cloneElement(child))}
        </div>
      </div>
      {activeIndex !== React.Children.count(children) - 2 && (
        <FontAwesomeIcon
          className="carousel-arrow"
          icon={faAngleRight}
          size="xl"
          type="button"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        />
      )}
    </div>
  );
}

Carousel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};
