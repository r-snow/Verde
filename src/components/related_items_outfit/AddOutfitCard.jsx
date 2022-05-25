import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

export default function AddOutfitCard() {
  return (
    <div className="add-outfit-card">
      <FontAwesomeIcon icon={faCirclePlus} size="lg" type="button" />
      <p>Add Outfit</p>
    </div>
  );
}
