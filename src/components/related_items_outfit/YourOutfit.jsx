import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import AddOutfitCard from './AddOutfitCard';
import Carousel from './Carousel';
import ProductCard from './ProductCard';
import Compare from './CompareModal';
import sampleStyles from './sampleStylesData';

export default function YourOutfit({ curProd }) {
  const [outfit, setOutfit] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleAdd = () => {
    setOutfit((prevOutfit) => [...prevOutfit, curProd]);
  };

  return (
    <div>
      <h2>Your Outfit</h2>
      <section className="your-outfit">
        <AddOutfitCard className="add-oufit-card" handleAdd={handleAdd} />
        <div>
          <Carousel>
            {outfit.map((product) => (
              <ProductCard
                product={product}
                setOpenModal={setOpenModal}
                image={sampleStyles.results[0].photos[0].url}
                key={nanoid()}
              />
            ))}
          </Carousel>
          {openModal && (
            <Compare
              curProdID="40005"
              compProdID="40006"
              setOpenModal={setOpenModal}
            />
          )}
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
