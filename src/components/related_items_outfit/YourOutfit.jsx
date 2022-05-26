import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddOutfitCard from './AddOutfitCard';
import Carousel from './Carousel';
import ProductCard from './ProductCard';
import Compare from './CompareModal';

export default function YourOutfit({ curProd }) {
  const [outfit, setOutfit] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleAdd = () => {
    setOutfit((prevOutfit) => [...prevOutfit, curProd]);
  };

  return (
    <div>
      <h2>Your Outfit</h2>
      <section
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        <AddOutfitCard handleAdd={handleAdd} />
        <div>
          <Carousel outfit={outfit}>
            {outfit.map((product) => (
              <ProductCard product={product} setOpenModal={setOpenModal} />
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
