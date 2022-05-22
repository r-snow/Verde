import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AnswerList from './AnswerList';

export default function MoreAnswers({ answerArr }) {
  const [collapseAnswers, setCollapseAnswers] = useState(true);

  return (
    <div>
      {collapseAnswers ? (
        <div>
          <button
            type="button"
            onClick={() => {
              setCollapseAnswers(!collapseAnswers);
            }}
          >
            LOAD MORE ANSWERS
          </button>
        </div>
      ) : (
        <div>
          {answerArr.slice(2).map((answer) => (
            <AnswerList answer={answer} key={answer.id} />
          ))}
          <div>
            <button
              type="button"
              onClick={() => {
                setCollapseAnswers(!collapseAnswers);
              }}
            >
              Collapse Answers
            </button>
          </div>
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
