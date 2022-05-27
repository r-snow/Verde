import React from 'react';
import PropTypes from 'prop-types';

export default function SearchHighlight({ searchInput, body }) {
  const searchQuery = searchInput.toLowerCase();
  const questionBody = body.toLowerCase();
  const highlight = body.substring(
    questionBody.indexOf(searchQuery),
    questionBody.indexOf(searchQuery) + searchInput.length
  );

  return (
    <span>
      {body.substring(0, questionBody.indexOf(searchQuery))}
      <mark>{highlight}</mark>
      {body.substring(questionBody.indexOf(searchQuery) + searchInput.length)}
    </span>
  );
}

SearchHighlight.propTypes = {
  searchInput: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
