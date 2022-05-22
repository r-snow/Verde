import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AnswerList from './AnswerList';
import MoreAnswers from './MoreAnswers';
import AddAnswer from './AddAnswer';

export default function Question({ question }) {
  const [marked, setMarked] = useState(false);
  const [helpful, setHelpful] = useState(question.question_helpfulness);
  const [showModal, setShowModal] = useState(false);

  let answerArr = Object.keys(question.answers).map((a) => question.answers[a]);
  const sellerCompare = (a, b) => {
    if (a.answerer_name === 'Seller' && b.answerer_name !== 'Seller') {
      return -1;
    }
    if (a.answerer_name !== 'Seller' && b.answerer_name === 'Seller') {
      return 1;
    }
    return 0;
  };

  answerArr = answerArr
    .sort((a, b) => b.helpfulness - a.helpfulness)
    .sort(sellerCompare);

  const markHelpful = () => {
    if (!marked) {
      setMarked(true);
      setHelpful(helpful + 1);
    }
  };

  return (
    <div>
      <span>Q: {question.question_body}</span>
      <span> | Helpful? </span>
      <span
        onClick={markHelpful}
        onKeyPress={markHelpful}
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
      <span
        onClick={() => setShowModal(true)}
        onKeyPress={setShowModal}
        tabIndex="0"
        role="button"
        style={{
          textDecoration: 'underline',
          cursor: 'pointer',
        }}
      >
        | Add Answer
      </span>

      {answerArr
        .slice(0, 3)
        .map((answer, count) =>
          count > 1 ? (
            <MoreAnswers answerArr={answerArr} key={0} />
          ) : (
            <AnswerList key={answer.id} answer={answer} />
          )
        )}
      {showModal && (
        <AddAnswer question={question} setShowModal={setShowModal} />
      )}
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};
