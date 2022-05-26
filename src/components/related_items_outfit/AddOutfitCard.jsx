import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

export default function AddOutfitCard() {
  return (
    <div
      className="add-outfit-card"
      onClick={() => console.log('Add current product to outfit...')}
      onKeyPress={() => console.log('Add current product to outfit...')}
      role="button"
      tabIndex={0}
    >
      <FontAwesomeIcon
        className="add-outfit-plus"
        icon={faCirclePlus}
        size="xl"
        type="button"
      />
      <p>Add Outfit</p>
    </div>
  );
}
