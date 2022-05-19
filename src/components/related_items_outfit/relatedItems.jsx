import React from 'react';
import ProductCard from './riProductCard.jsx';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // related products from API call
    };
  }

  render() {
    return (
      <div>
        <h2>Related Items</h2>
        <section
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </section>
      </div>
    );
  }
}

export default RelatedItems;
