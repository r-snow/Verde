import React, { useState } from 'react';
import Search from './QnA_Components/Search';
import QuestionList from './QnA_Components/QuestionList';
import exampleData from './exampleData';
import AddAQuestion from './QnA_Components/AddAQuestion';

export default function QnA() {
  let questions = exampleData.results;
  questions = questions.sort((a, b) => a.helpfulness - b.helpfulness);
  const productID = exampleData.product_id;
  const [searchInput, setSearchInput] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  // eslint-disable-next-line no-shadow
  const handleSearch = (searchInput) => {
    if (searchInput.length > 2) {
      setSearchInput(searchInput);
    } else {
      setSearchInput('');
    }
  };

  return (
    <section className="qa-widget">
      <h1 className="qa-header">Questions &amp; Answers</h1>
      <Search handleSearch={handleSearch} />
      {questions !== undefined && Object.keys(questions).length ? (
        <QuestionList
          questions={questions}
          searchInput={searchInput}
          productID={productID}
        />
      ) : null}
      {questions === undefined && (
        <div>
          <button
            className="add-question-button"
            type="button"
            onClick={() => setOpenModal(true)}
          >
            Add A QUESTION +
          </button>
          {openModal && (
            <AddAQuestion productID={productID} setOpenModal={setOpenModal} />
          )}
        </div>
      )}
    </section>
  );
}
