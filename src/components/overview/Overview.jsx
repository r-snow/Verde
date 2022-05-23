import React, { useState } from 'react';
import ImageGallery from './ImageGallery';
import ExpandedView from './ExpandedView';
import DescriptionDetails from './DescriptionDetails';

export default function Overview() {
  const [isDefaultImgView, setIsDefaultImgView] = useState(true);

  const changeImgView = () => {
    setIsDefaultImgView((prev) => !prev);
  };

  return isDefaultImgView ? (
    <section
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '4em',
      }}
    >
      <ImageGallery changeImgView={changeImgView} />
      <DescriptionDetails />
    </section>
  ) : (
    <ExpandedView changeImgView={changeImgView} />
  );
}
