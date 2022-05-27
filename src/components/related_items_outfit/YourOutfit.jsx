import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import AddOutfitCard from './AddOutfitCard';
import Carousel from './Carousel';
import YOProductCard from './YOProductCard';
import sampleStyles from './sampleStylesData';

export default function YourOutfit({ curProd }) {
  const [outfit, setOutfit] = useState([]);

  const handleAdd = () => {
    setOutfit((prevOutfit) => [...prevOutfit, curProd]);
  };

  const handleRemove = (index) => {
    setOutfit((prevOutfit) => {
      prevOutfit.splice(index, 1);
      return prevOutfit.slice();
    });
  };

  return (
    <div>
      <h2>Your Outfit</h2>
      <section className="your-outfit">
        <AddOutfitCard className="add-oufit-card" handleAdd={handleAdd} />
        <div>
          <Carousel>
            {outfit.map((product, index) => (
              <YOProductCard
                product={product}
                handleRemove={handleRemove}
                image={sampleStyles.results[0].photos[0].url}
                key={nanoid()}
                index={index}
              />
            ))}
          </Carousel>
        </div>
      </section>
    </div>
  );
}

YourOutfit.propTypes = {
  curProd: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};
