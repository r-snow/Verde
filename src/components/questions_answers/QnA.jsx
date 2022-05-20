import React from 'react';
import Search from './QnA_Components/Search';
import QuestionList from './QnA_Components/QuestionList';
import exampleData from './exampleData';

export default function QnA() {
  const questions = exampleData.results;
  return (
    <section>
      <h1>Questions &amp; Answers</h1>
      <Search />
      {questions.slice(0, 5).map((question) => (
        <QuestionList question={question} />
      ))}
      <button type="button">MORE ANSWERED QUESTIONS</button>
      <button type="button">Add A QUESTION +</button>
    </section>
  );
}
