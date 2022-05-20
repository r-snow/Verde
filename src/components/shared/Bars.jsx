import React from 'react';
import PropTypes from 'prop-types';

export default function Bars({ reviewCount, totalCount }) {
  return (
    <div
      className="bars"
      style={{ '--reviewCount': reviewCount, '--totalCount': totalCount }}
    />
  );
}

Bars.propTypes = {
  reviewCount: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
};
