import React from 'react';
import { format, parseISO } from 'date-fns';

export default function AnswerList({ answer }) {
  const { body, date, answerer_name, helpfulness, photos } = answer;
  return (
    <div>
      <span>A: {body}</span>
      <div>
        <span>by {answerer_name}, </span>
        <span> {format(parseISO(date), 'MMMM, dd, yyyy')}</span>
      </div>
    </div>
  );
}
