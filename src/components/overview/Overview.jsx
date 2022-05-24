import React, { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery';
import ExpandedView from './ExpandedView';
import DescriptionDetails from './DescriptionDetails';
import productData from './example_data/productData';
import productStylesData from './example_data/productStylesData';
import productReviewsData from './example_data/productReviewsData';

export default function Overview() {
  const [isDefaultImgView, setIsDefaultImgView] = useState(true);
  const [currImgIdx, setCurrImgIdx] = useState(0);
  const [currStyle, setCurrStyle] = useState(0);
  const [reviewCount, setReviewCount] = useState(0);
  const [avgRating, setAvgRating] = useState(0);

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

  const currPrice = Number(productStylesData.results[currStyle].original_price);

  const currSalePrice =
    productStylesData.results[currStyle].sale_price === null
      ? 0
      : Number(productStylesData.results[currStyle].sale_price);

  // useEffect(() => {
  //   const reviewData = Object.keys(productReviewsData.ratings);
  //   for (let i = 0; i < reviewData.length; i += 1) {
  //     setReviewCount(
  //       (prev) => prev + Number(productReviewsData[reviewData[i]])
  //     );
  //     setAvgRating((prev) => prev + Number(reviewData[i]));
  //   }
  //   setAvgRating((prev) => prev / reviewCount);
  // }, []);

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
        currPrice={currPrice}
        currSalePrice={currSalePrice}
        reviewCount={reviewCount}
      />
    </section>
  ) : (
    <ExpandedView
      changeImgView={changeImgView}
      currPhotoUrl={productStylesData.results[currStyle].photos[currImgIdx].url}
    />
  );
}
