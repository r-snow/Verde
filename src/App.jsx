import React, { useState, useEffect } from 'react';
import Header from './components/overview/Header/Header';
import Overview from './components/overview/Overview';
import QnA from './components/questions_answers/QnA';
import RatingsAndReviews from './components/ratings_reviews/RatingsAndReviews';
import RelatedItems from './components/related_items_outfit/RelatedItems';
import YourOutfit from './components/related_items_outfit/YourOutfit';
import currentProduct from './components/related_items_outfit/sampleProductData';

function App() {
  const [curProd, setCurProd] = useState(currentProduct);
  const [localCart, setLocalCart] = useState(
    JSON.parse(localStorage.getItem('localCart')) || []
  );

  useEffect(() => {
    localStorage.setItem('localCart', JSON.stringify(localCart));
    console.log(localCart);
  }, [localCart]);

  return (
    <>
      <Header localCart={localCart} />
      <Overview setLocalCart={setLocalCart} />
      <RelatedItems curProd={curProd} setCurProd={setCurProd} />
      <YourOutfit curProd={curProd} />
      <QnA />
      <RatingsAndReviews />
    </>
  );
}

export default App;
