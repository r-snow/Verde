import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// export function CarouselItem({ children, width }) {
//   console.log(children);
//   return (
//     <div
//       className="carousel-item"
//       style={{
//         width,
//         display: 'inline-flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '200px',
//         backgroundColor: 'green',
//         color: '#fff',
//       }}
//     >
//       {children}
//     </div>
//   );
// }

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
      updateIndex(activeIndex + 1);
    }, 3000);

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });

  return (
    <div
      className="carousel"
      style={{
        overflow: 'hidden',
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="inner"
        style={{
          transform: `translateX(-${activeIndex * 400}px)`,
          whiteSpace: 'nowrap',
          transition: 'transform 0.5s',
        }}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { width: `400px` })
        )}
      </div>
      <div
        className="indicators"
        style={{
          display: 'flex',
          justifyContent: 'center',
          margin: '5px',
        }}
      >
        <button
          type="button"
          style={{
            margin: '5px',
          }}
          onClick={() => {
            updateIndex(activeIndex - 1);
            console.log('Scroll left coming soon...');
          }}
        >
          Prev
        </button>
        <button
          type="button"
          style={{
            margin: '5px',
          }}
          onClick={() => {
            updateIndex(activeIndex + 1);
            console.log('Scroll right coming soon...');
          }}
        >
          Next
        </button>
      </div>
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
