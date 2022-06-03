import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import AddOutfitCard from './AddOutfitCard';
import Carousel from './Carousel';
import YOProductCard from './YOProductCard';

export default function YourOutfit({ curProd }) {
  const [outfit, setOutfit] = useState([]);

  const handleAdd = () => {
    let isNewProd = true;
    for (let i = 0; i < outfit.length; i += 1) {
      if (outfit[i] === curProd) {
        isNewProd = false;
      }
    }

    if (isNewProd) {
      setOutfit((prevOutfit) => [...prevOutfit, curProd]);
    }
  };

  const handleRemove = (index) => {
    setOutfit((prevOutfit) => {
      prevOutfit.splice(index, 1);
      return prevOutfit.slice();
    });
  };

  return (
    <div>
      <h2 className="yo-header">Your Outfit</h2>
      <section className="your-outfit">
        <AddOutfitCard className="add-oufit-card" handleAdd={handleAdd} />
        <div>
          <Carousel>
            {outfit.map((product, index) => (
              <YOProductCard
                productID={product.id}
                handleRemove={handleRemove}
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
