import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Carousel from './Carousel';
import ProductCard from './ProductCard';
import Compare from './CompareModal';
import sampleItems from './sampleRelatedItems';
import sampleStyles from './sampleStylesData';

export default function RelatedItems() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <h2>Related Items</h2>
      <div>
        <Carousel>
          {sampleItems.map((product) => (
            <ProductCard
              product={product}
              setOpenModal={setOpenModal}
              image={sampleStyles.results[0].photos[0].url}
              key={nanoid()}
            />
          ))}
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
