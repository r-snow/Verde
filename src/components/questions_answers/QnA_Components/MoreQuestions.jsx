import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import Question from './Question';

export default function MoreQuestions({ questions }) {
  const [collapseQuestions, setCollapseQuestions] = useState(true);
  return (
    <div>
      {collapseQuestions ? (
        <button
          className="more-questions"
          type="button"
          onClick={() => {
            setCollapseQuestions(!collapseQuestions);
          }}
        >
          More Answered Questions
        </button>
      ) : (
        <div>
          {questions.slice(4).map((question) => (
            <Question question={question} key={nanoid()} />
          ))}
          <button
            className="more-questions"
            type="button"
            onClick={() => {
              setCollapseQuestions(!collapseQuestions);
            }}
          >
            Collapse Questions
          </button>
        </div>
      )}
    </div>
  );
}

MoreQuestions.propTypes = {
  questions: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};
