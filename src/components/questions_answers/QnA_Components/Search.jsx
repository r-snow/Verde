import React from 'react';
import PropTypes from 'prop-types';

export default function Search({ handleSearch }) {
  return (
    <form>
      <input
        className="qa-search-bar"
        type="text"
        placeholder="🔎 Have a question? Search for answers…"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
  );
}

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
