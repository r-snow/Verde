import React from 'react';
import { nanoid } from 'nanoid';

export default function SizeSelector() {
  const [selected, setSelected] = React.useState('Select Size');
  const sizes = ['Select Size', 'XS', 'S', 'M', 'L', 'XL'];
  const sizeOptions = sizes.map((size) => (
    <option key={nanoid()} value={size}>
      {size}
    </option>
  ));

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <select value={selected} onChange={handleChange}>
      {sizeOptions}
    </select>
  );
}
