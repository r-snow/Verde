import React from 'react';
import AnswerList from './AnswerList';
// import { format, parseISO } from 'date-fns';

export default function QuestionList({ question }) {
  const { question_body, question_helpfulness, answers } = question;
  const answersArr = Object.values(answers);
  return (
    <div>
      <div>
        Q: {question_body}
        <span>
          Helpful? <a>Yes</a>
          <span>{question_helpfulness}</span> | <a>Add Answer</a>
        </span>
      </div>

      {answersArr.slice(0, 2).map((answer) => (
        <AnswerList answer={answer} />
      ))}
    </div>
  );
}
