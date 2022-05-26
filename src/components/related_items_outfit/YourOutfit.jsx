import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddOutfitCard from './AddOutfitCard';
import Carousel from './Carousel';
import ProductCard from './RIProductCard';
import Compare from './CompareModal';

export default function YourOutfit({ curProd }) {
  const [outfit, setOutfit] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleAdd = () => {
    let newOutfit = outfit;
    newOutfit.push(curProd);
    setOutfit(newOutfit);
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
        {/* Conditional render if there are no products on Outfit */}
        <AddOutfitCard handleAdd={handleAdd} />
        <Carousel>
          <ProductCard setOpenModal={setOpenModal} />
        </Carousel>
        {openModal && (
          <Compare
            curProdID="40005"
            compProdID="40006"
            setOpenModal={setOpenModal}
          />
        )}
      </section>
    </div>
  );
}

YourOutfit.propTypes = {
  curProdID: PropTypes.number.isRequired,
};
