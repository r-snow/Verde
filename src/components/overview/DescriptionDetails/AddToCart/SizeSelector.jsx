import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

export default function SizeSelector({ skuData, currSku, setCurrSku }) {
  const sizeOptions = Object.keys(skuData).map((key) => (
    <option key={nanoid()} value={key}>
      {skuData[key].size}
    </option>
  ));

  const handleChange = (e) => {
    setCurrSku(e.target.value);
  };

  return sizeOptions.length > 1 ? (
    <select value={currSku} onChange={handleChange} className="size-select">
      {sizeOptions}
    </select>
  ) : (
    <select value="oos" disabled className="size-select">
      <option value="oos">OUT OF STOCK</option>
    </select>
  );
}

SizeSelector.propTypes = {
  skuData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  currSku: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setCurrSku: PropTypes.func.isRequired,
};
