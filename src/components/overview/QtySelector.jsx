import React from 'react';

export default function QtySelector() {
  const [selected, setSelected] = React.useState('-');
  const quantities = ['-', 1, 2, 3, 4, 5];
  const qtyOptions = quantities.map((size) => (
    <option key={size} value={size}>
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
