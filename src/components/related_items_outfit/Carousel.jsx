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

  return (
    <div
      className="carousel"
      style={{
        overflow: 'hidden',
        transform: `translateX(-{${activeIndex * 100}}%)`,
        whiteSpace: 'nowrap',
        transition: 'transform 0.3s',
      }}
    >
      <div
        className="inner"
        style={{
          transform: 'translateX(-0%)',
          whiteSpace: 'nowrap',
          transition: 'transform 0.3s',
        }}
      >
        {React.Children.map(children, (child, index) =>
          React.cloneElement(child, { width: '30%' })
        )}
      </div>
    </div>
  );
}
