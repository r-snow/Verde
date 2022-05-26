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
    const newOutfit = outfit;
    newOutfit.push(curProd);
    setOutfit(newOutfit);
    console.log(outfit);
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
        <div>
          <Carousel>
            <ProductCard setOpenModal={setOpenModal} />
            {/* {outfit.map((product) => (
            ))} */}
          </Carousel>
        </div>
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
  curProd: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};
