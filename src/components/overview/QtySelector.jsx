import React from 'react';
import { nanoid } from 'nanoid';

export default function QtySelector() {
  const [selected, setSelected] = React.useState('-');
  const quantities = ['-', 1, 2, 3, 4, 5];
  const qtyOptions = quantities.map((size) => (
    <option key={nanoid()} value={size}>
      {size}
    </option>
  ));

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  return (
    <select value={selected} onChange={handleChange}>
      {qtyOptions}
    </select>
  );
}
