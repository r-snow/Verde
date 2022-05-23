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
    <div className="answer-div">
      <div className="answer">
        <span
          style={{
            fontWeight: 'bold',
          }}
        >
          A: &nbsp;
        </span>
        {body}
      </div>
      <div>
        {answer.photos.length > 0 &&
          answer.photos.map((photo) => (
            <AnswerPhotos photo={photo} key={photo} />
          ))}
      </div>
      <div className="answer-name">
        <span>by &nbsp;</span>
        {answer.answerer_name === 'Seller' ? (
          <span
            style={{
              fontWeight: 'bold',
            }}
          >
            Seller &nbsp;
          </span>
        ) : (
          <span>{answer.answerer_name}, &nbsp;</span>
        )}
        <span> {format(parseISO(date), 'MMMM, dd, yyyy')}</span>
        <span> &nbsp;&nbsp;|&nbsp; Helpful? &nbsp;&nbsp;</span>
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
        <span> &nbsp;&nbsp;({helpful}) &nbsp;&nbsp;|&nbsp;&nbsp;</span>
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
            Report
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
