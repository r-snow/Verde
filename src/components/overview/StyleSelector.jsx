import React from 'react';

export default function StyleSelector() {
  const [selectedStyle, setSelectedStyle] = React.useState('style1');
  const styles = ['style1', 'style2', 'style3', 'style4', 'style5'];

  const handleStyleClick = (style) => {
    setSelectedStyle(style);
  };
  const thumbnails = styles.map((style) => (
    <button
      type="button"
      key={style}
      id={style}
      onClick={() => handleStyleClick(style)}
      style={{
        color: selectedStyle === style ? 'red' : 'black',
      }}
    >
      {style}
    </button>
  ));

  return <section>{thumbnails}</section>;
}
