import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export default function AddOutfitCard({ handleAdd }) {
  return (
    <div
      className="add-outfit-card"
      onClick={handleAdd}
      onKeyPress={handleAdd}
      role="button"
      tabIndex={0}
    >
      <FontAwesomeIcon
        className="add-outfit-plus"
        icon={faCirclePlus}
        size="xl"
        type="button"
      />
      <p className="add-oufit-button">ADD OUTFIT</p>
    </div>
  );
}

AddOutfitCard.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};
