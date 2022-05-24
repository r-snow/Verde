import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import AnswerList from './AnswerList';

export default function MoreAnswers({ answerArr }) {
  const [collapseAnswers, setCollapseAnswers] = useState(true);

  return (
    <div
      style={{
        maxHeight: '350px',
        overflowY: 'scroll',
      }}
    >
      {collapseAnswers ? (
        <button
          className="more-answers"
          type="button"
          onClick={() => {
            setCollapseAnswers(!collapseAnswers);
          }}
        >
          LOAD MORE ANSWERS
        </button>
      ) : (
        <div>
          {answerArr.slice(2).map((answer) => (
            <AnswerList answer={answer} key={nanoid()} />
          ))}
          <button
            className="more-answers"
            type="button"
            onClick={() => {
              setCollapseAnswers(!collapseAnswers);
            }}
          >
            Collapse Answers
          </button>
        </div>
      )}
    </div>
  );
}

MoreAnswers.propTypes = {
  answerArr: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};
