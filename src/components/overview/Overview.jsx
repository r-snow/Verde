import React from 'react';
import ImageGallery from './ImageGallery';
import DescriptionDetails from './DescriptionDetails';

export default function Overview() {
  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4em',
      }}
    >
      <ImageGallery />
      <DescriptionDetails />
    </section>
  );
}
