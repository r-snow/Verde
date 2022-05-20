import React from 'react';
import AddToOutfitCard from './AddOutfitCard';

export default function YourOutfit() {
  return (
    <div>
      <h2>Your Outfit</h2>
      <section
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}
      >
        {/* Conditional render if there are no products on Outfit */}
        <AddToOutfitCard />
      </section>
    </div>
  );
}
