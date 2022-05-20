import React from 'react';

export default function CarouselItem({ children, width }) {
  return (
    <div
      className="carousel-item"
      style={{
        width: 'width',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '200px',
        backgroundColor: 'green',
        color: '#fff',
      }}
    >
      {children}
    </div>
  );
}
