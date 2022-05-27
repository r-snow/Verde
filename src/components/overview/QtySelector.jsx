import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export default function QtySelector({ availQty, selectedQty, setSelectedQty }) {
  const qtyOptions = availQty.map((qty) => (
    <option key={nanoid()} value={qty}>
      {qty}
    </option>
  ));

  const handleChange = (e) => {
    setSelectedQty(e.target.value);
  };

  return availQty[0] === '-' ? (
    <select value={selectedQty} disabled className="qty-select">
      {qtyOptions}
    </select>
  ) : (
    <select value={selectedQty} onChange={handleChange} className="qty-select">
      {qtyOptions}
    </select>
  );
}

QtySelector.propTypes = {
  availQty: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  selectedQty: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  setSelectedQty: PropTypes.func.isRequired,
};
