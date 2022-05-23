import React, { useState } from 'react';

export function CarouselItem({ children, width }) {
  return (
    <div
      className="carousel-item"
      style={{
        width,
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
        backgroundColor: 'green',
        color: '#fff',
      }}
    >
      {children}
    </div>
  );
}

export default function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div
      className="carousel"
      style={{
        overflow: 'hidden',
        transform: `translateX(-0%)`,
        whiteSpace: 'nowrap',
        transition: 'transform 0.3s',
      }}
    >
      <div
        className="inner"
        style={{
          transform: `translateX(-${activeIndex * 30}%)`,
          whiteSpace: 'nowrap',
          transition: 'transform 0.3s',
        }}
      >
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { width: '30%' })
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
