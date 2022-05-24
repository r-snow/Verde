import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SizeSelector from './SizeSelector';
import QtySelector from './QtySelector';

export default function AddToCart({ skuData, currStyle }) {
  const [currSku, setCurrSku] = useState('Select Size');
  const [availQty, setAvailQty] = useState(['-']);
  const [selectedQty, setSelectedQty] = React.useState('-');

  useEffect(() => {
    let newMax = skuData[currSku].quantity;
    if (newMax === '-') {
      setAvailQty([newMax]);
      setSelectedQty('-');
    } else {
      newMax = newMax <= 15 ? newMax : 15;
      const newQty = [];
      for (let i = 1; i <= newMax; i += 1) {
        newQty.push(i);
      }
      setAvailQty(newQty);
      setSelectedQty(newQty[0]);
    }
  }, [currSku, skuData]);

  useEffect(() => {
    setCurrSku('Select Size');
    setAvailQty(['-']);
    setSelectedQty('-');
  }, [currStyle]);

  const handleCartSubmit = (e) => {
    e.preventDefault();
    if (currSku === 'Select Size') {
      // alert('Please pick a size');
    } else {
      // console.log('currSku: ', currSku);
      // console.log('selectedQty: ', selectedQty);
    }
  };

  return (
    <form
      onSubmit={handleCartSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1em',
      }}
    >
      <span>
        <SizeSelector
          currSku={currSku}
          setCurrSku={setCurrSku}
          skuData={skuData}
        />
        <QtySelector
          availQty={availQty}
          selectedQty={selectedQty}
          setSelectedQty={setSelectedQty}
        />
      </span>
      <button type="submit">Add to Cart</button>
    </form>
  );
}

AddToCart.propTypes = {
  skuData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  currStyle: PropTypes.number.isRequired,
};
