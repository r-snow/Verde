import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Question from './Question';

export default function MoreQuestions({ questions }) {
  const [collapseQuestions, setCollapseQuestions] = useState(true);
  return (
    <div>
      {collapseQuestions ? (
        <div>
          <button
            type="button"
            onClick={() => {
              setCollapseQuestions(!collapseQuestions);
            }}
          >
            More Answered Questions
          </button>
        </div>
      ) : (
        <div>
          {questions.slice(4).map((question) => (
            <Question question={question} key={question.question_id} />
          ))}
          <div>
            <button
              type="button"
              onClick={() => {
                setCollapseQuestions(!collapseQuestions);
              }}
            >
              Collapse Questions
            </button>
          </div>
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
