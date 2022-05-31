import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Search from './QnA_Components/Search';
import QuestionList from './QnA_Components/QuestionList';
import AddAQuestion from './QnA_Components/AddAQuestion';
import config from '../../../config/config';

export default function QnA() {
  const [questions, setQuestions] = useState([]);
  const [searchInput, setSearchInput] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/rfp/';
  const productID = 65645;
  useEffect(() => {
    axios
      .get(`${url}qa/questions?product_id=${productID}&count=100`, {
        headers: { Authorization: config.TOKEN },
      })
      .then((results) =>
        setQuestions(
          results.data.results.sort(
            (a, b) => b.question_helpfulness - a.question_helpfulness
          )
        )
      );
  }, [productID]);

  const handleSearch = (searchTerm) => {
    if (searchTerm.length > 2) {
      setSearchInput(searchTerm);
    } else {
      setSearchInput('');
    }
  };

  return (
    <section className="qa-widget">
      <h1 className="qa-header">Questions &amp; Answers</h1>
      <Search handleSearch={handleSearch} />
      {questions.length ? (
        <QuestionList
          questions={questions}
          searchInput={searchInput}
          productID={productID}
        />
      ) : null}
      {!questions.length && (
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
