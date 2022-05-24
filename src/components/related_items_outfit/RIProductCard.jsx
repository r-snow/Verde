import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Price from '../shared/Price';
import Image from './Image';
import Stars from '../shared/Stars';
import Compare from './CompareModal';

export default function ProductCard() {
  const [openModal, setOpenModal] = useState(false);

  const handleKeyPress = (event) => {
    event.preventDefault();
    if (event.key === 'Enter') {
      console.log('Compare to current product coming soon...');
    }
  };

  const handleClick = () => {
    console.log('Compare to current product coming soon...');
  };

  return (
    <div
      onClick={handleClick}
      onKeyPress={handleKeyPress}
      role="button"
      tabIndex={0}
      className="product-card"
      style={{
        width: 'fit-content',
        display: 'inline-flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="product-card-compare">
        <FontAwesomeIcon
          icon={faStar}
          size="lg"
          type="button"
          onClick={() => setOpenModal(true)}
        />
        {openModal && (
          <Compare
            curProdId="40005"
            compProdID="40006"
            setOpenModal={setOpenModal}
          />
        )}
      </div>
      <Image />
      <p>Jackets</p>
      <p>Camo Onesie</p>
      <Price price={140} salePrice={120} />
      <Stars />
    </div>
  );
}
