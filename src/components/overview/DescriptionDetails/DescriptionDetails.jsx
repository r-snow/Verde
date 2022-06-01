import React from 'react';
import PropTypes from 'prop-types';
import AddToCart from './AddToCart/AddToCart';
import StyleSelector from './StyleSelector';
import Socials from './Socials';
import Price from '../../shared/Price';
import CustomStars from '../../shared/CustomStars';

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
    <div className="description-details--container fade-in">
      <p className="description-details--category">{category.toUpperCase()}</p>
      <p className="description-details--name">{name}</p>
      {slogan.length && <b className="description-details--slogan">{slogan}</b>}
      {description.length && (
        <p className="description-details--description">{description}</p>
      )}
      {reviewCount > 0 && (
        <span className="description-details--reviews-container">
          <CustomStars rating={avgRating} color="#9a825c" size="20px" />
          <a
            className="description-details--reviews-link"
            href="#ratings-reviews"
          >
            READ ALL {reviewCount} REVIEWS
          </a>
        </span>
      )}
      <Price price={currPrice} salePrice={currSalePrice} fontSize={30} />
      <p className="description-details--style-name">
        {styles[currStyle].name.toUpperCase()}
      </p>
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
