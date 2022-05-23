import React, { useState } from 'react';
import ImageGallery from './ImageGallery';
import ExpandedView from './ExpandedView';
import DescriptionDetails from './DescriptionDetails';
import productStylesData from './example_data/productStylesData';
import productData from './example_data/productData';

export default function Overview() {
  const [isDefaultImgView, setIsDefaultImgView] = useState(true);
  const [currImgIdx, setCurrImgIdx] = useState(0);
  const [currStyle, setCurrStyle] = useState(0);

  const styles = productStylesData.results.map((style) => ({
    styleId: style.style_id,
    iconUrl: style.photos[0].thumbnail_url,
  }));

  const incrementIdx = () => {
    setCurrImgIdx((prev) => prev + 1);
  };

  const decrementIdx = () => {
    setCurrImgIdx((prev) => prev - 1);
  };

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
      <ImageGallery
        changeImgView={changeImgView}
        photos={productStylesData.results[currStyle].photos}
        currImgIdx={currImgIdx}
        incrementIdx={incrementIdx}
        decrementIdx={decrementIdx}
        setCurrImgIdx={setCurrImgIdx}
      />
      <DescriptionDetails
        category={productData.category}
        name={productData.name}
        description={productData.description}
        styles={styles}
        currStyle={currStyle}
        setCurrStyle={setCurrStyle}
      />
    </section>
  ) : (
    <ExpandedView
      changeImgView={changeImgView}
      currPhotoUrl={productStylesData.results[currStyle].photos[currImgIdx].url}
    />
  );
}
