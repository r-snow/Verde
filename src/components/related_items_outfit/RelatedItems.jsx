import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Carousel from './Carousel';
import ProductCard from './RIProductCard';
import Compare from './CompareModal';

export default function RelatedItems() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <h2>Related Items</h2>
      <div className="carousel">
        <Carousel>
          <ProductCard setOpenModal={setOpenModal} />
          <ProductCard setOpenModal={setOpenModal} />
          <ProductCard setOpenModal={setOpenModal} />
          <ProductCard setOpenModal={setOpenModal} />
          <ProductCard setOpenModal={setOpenModal} />
          <ProductCard setOpenModal={setOpenModal} />
          <ProductCard setOpenModal={setOpenModal} />
        </Carousel>
      </div>
      {openModal && (
        <Compare
          curProdID="40005"
          compProdID="40006"
          setOpenModal={setOpenModal}
        />
      )}
    </div>
  );
}

Compare.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
};
