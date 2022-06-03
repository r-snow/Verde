import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import SizeSelector from './SizeSelector';
import QtySelector from './QtySelector';
import CartMessage from './CartMessage';
import config from '../../../../../config/config';

export default function AddToCart({
  skuData,
  currStyle,
  prodName,
  styleName,
  price,
  salePrice,
  styleUrl,
  setLocalCart,
  setShowDrawer,
  productID,
}) {
  const [currSku, setCurrSku] = useState('Select Size');
  const [availQty, setAvailQty] = useState(['-']);
  const [selectedQty, setSelectedQty] = useState('-');
  const [message, setMessage] = useState('none');

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
      setMessage('warning');
    } else {
      setMessage('none');
      const count = e.target[1].value;
      setLocalCart((prevCart) => {
        const localCartItem = {
          count,
          prodName,
          styleName,
          styleUrl,
          price,
          salePrice,
          productID,
          size: skuData[currSku].size,
          skuId: currSku,
          idx: prevCart.length,
        };
        return [...prevCart, localCartItem];
      });
      const postPromises = [];
      for (let i = 0; i < count; i += 1) {
        axios.post(
          'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart',
          {
            sku_id: Number(currSku),
            count,
          },
          { headers: { Authorization: config.TOKEN } }
        );
      }
      Promise.all(postPromises)
        .then(() => {
          setShowDrawer(true);
        })
        .catch(() => {
          setMessage('failure');
        });
    }
  };

  return (
    <form onSubmit={handleCartSubmit} className="add-to-cart--container">
      <span>
        <CartMessage message={message} />
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
      <button type="submit" className="add-to-cart--btn">
        ADD TO CART
      </button>
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
  productID: PropTypes.number.isRequired,
  prodName: PropTypes.string.isRequired,
  styleUrl: PropTypes.string.isRequired,
  styleName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  salePrice: PropTypes.number.isRequired,
  setLocalCart: PropTypes.func.isRequired,
  setShowDrawer: PropTypes.func.isRequired,
};
