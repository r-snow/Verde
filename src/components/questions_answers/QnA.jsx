import React from 'react';
import Search from './QnA_Components/Search';
// import exampleData from './exampleData';

export default function QnA() {
  return (
    <section>
      <h1>Questions &amp; Answers</h1>
      <Search />
      <div>
        <p>Q: Would it fit super skinny people?</p>
        <p>A: Probably Not</p>
      </div>
      <button type="submit">MORE ANSWERED QUESTIONS</button>
      <button type="submit">Add A QUESTIONS +</button>
    </section>
  );
}
