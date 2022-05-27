import React from 'react';
import PropTypes from 'prop-types';
import AddToCart from './AddToCart';
import StyleSelector from './StyleSelector';
import Socials from './Socials';
import Price from '../shared/Price';
import CustomStars from '../shared/CustomStars';

export default function DescriptionDetails({
  category,
  name,
  description,
  styles,
  currStyle,
  setCurrStyle,
  currPrice,
  currSalePrice,
  reviewCount,
  avgRating,
  skuData,
  slogan,
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '400px',
      }}
    >
      <p
        style={{
          textAlign: 'center',
        }}
      >
        {category}
      </p>
      <p
        style={{
          textAlign: 'center',
        }}
      >
        {name}
      </p>
      {slogan.length && (
        <b
          style={{
            textAlign: 'center',
          }}
        >
          {slogan}
        </b>
      )}
      {description.length && (
        <p
          style={{
            textAlign: 'center',
          }}
        >
          {description}
        </p>
      )}
      {reviewCount > 0 && (
        <span
          style={{
            display: 'flex',
            gap: '0.4em',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}
        >
          <CustomStars rating={avgRating} color="gold" size="20px" />
          <a
            href="#ratings-reviews"
            style={{
              color: 'black',
            }}
          >
            Read all {reviewCount} reviews
          </a>
        </span>
      )}
      <Price price={currPrice} salePrice={currSalePrice} />
      <StyleSelector
        styles={styles}
        currStyle={currStyle}
        setCurrStyle={setCurrStyle}
      />
      <AddToCart skuData={skuData} currStyle={currStyle} />
      <Socials />
    </div>
  );
}

DescriptionDetails.propTypes = {
  category: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
  styles: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  currStyle: PropTypes.number.isRequired,
  setCurrStyle: PropTypes.func.isRequired,
  currPrice: PropTypes.number.isRequired,
  currSalePrice: PropTypes.number.isRequired,
  reviewCount: PropTypes.number.isRequired,
  avgRating: PropTypes.number.isRequired,
  skuData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};
