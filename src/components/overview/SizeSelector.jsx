import React from 'react';

export default function SizeSelector() {
  const [selected, setSelected] = React.useState('Select Size');
  const sizes = ['Select Size', 'XS', 'S', 'M', 'L', 'XL'];
  const sizeOptions = sizes.map((size) => (
    <option key={size} value={size}>
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
