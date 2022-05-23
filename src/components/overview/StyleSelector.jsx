import React from 'react';
import { nanoid } from 'nanoid';

export default function StyleSelector() {
  const [selectedStyle, setSelectedStyle] = React.useState('style1');
  const styles = ['style1', 'style2', 'style3', 'style4', 'style5'];

  const handleStyleClick = (style) => {
    setSelectedStyle(style);
  };
  const thumbnails = styles.map((style) => (
    <button
      type="button"
      key={nanoid()}
      id={style}
      onClick={() => handleStyleClick(style)}
      style={{
        backgroundColor: selectedStyle === style ? 'lightgrey' : 'transparent',
        borderRadius: '50%',
        borderColor: 'transparent',
        marginRight: '1em',
        padding: '0.5em',
      }}
    >
      <img
        src="https://tracksmith-media.imgix.net/Spring22-Mens-Twilight-Tee-Denim.png?auto=format,compress&crop=faces&dpr=2&fit=crop&h=30&w=30"
        alt={style}
        width="30px"
      />
    </button>
  ));

  return (
    <section
      style={{
        marginBottom: '1em',
      }}
    >
      {thumbnails}
    </section>
  );
}
