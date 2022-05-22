import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import AnswerPhotos from './AnswerPhotos';

export default function AnswerList({ answer }) {
  const { body, date } = answer;
  const [marked, setMarked] = useState(false);
  const [helpful, setHelpful] = useState(answer.helpfulness);
  const [reportToggle, setReportToggle] = useState(false);

  const markAnswerHelpful = () => {
    if (!marked) {
      setMarked(true);
      setHelpful(helpful + 1);
    }
  };

  const reportAnswer = () => {
    if (!reportToggle) {
      setReportToggle(true);
    }
  };

  return (
    <div>
      <div>A: {body}</div>
      <div>
        {answer.photos.length > 0 &&
          answer.photos.map((photo) => (
            <AnswerPhotos photo={photo} key={photo} />
          ))}
      </div>
      <div>
        <span>by {answer.answerer_name}, </span>
        <span> {format(parseISO(date), 'MMMM, dd, yyyy')}</span>
        <span> | Helpful? </span>
        <span
          onClick={markAnswerHelpful}
          onKeyPress={markAnswerHelpful}
          tabIndex="0"
          role="button"
          style={{
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          Yes
        </span>
        <span> ({helpful}) </span>
        {reportToggle === false && (
          <span
            onClick={reportAnswer}
            onKeyPress={reportAnswer}
            tabIndex="0"
            role="button"
            style={{
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
          >
            | Report
          </span>
        )}
        {reportToggle === true && <span> | Thank you for your report!</span>}
      </div>
    </div>
  );
}

AnswerList.propTypes = {
  answer: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};
