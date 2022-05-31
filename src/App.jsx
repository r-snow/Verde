import React, { useState } from 'react';
import Header from './components/overview/Header';
import Overview from './components/overview/Overview';
import QnA from './components/questions_answers/QnA';
import RatingsAndReviews from './components/ratings_reviews/RatingsAndReviews';
import RelatedItems from './components/related_items_outfit/RelatedItems';
import YourOutfit from './components/related_items_outfit/YourOutfit';
import currentProduct from './components/related_items_outfit/sampleProductData';

function App() {
  const [curProd, setCurProd] = useState(Number(currentProduct.id));

  return (
    <>
      <Header />
      <Overview />
      <RelatedItems curProd={curProd} setCurProd={setCurProd} />
      <YourOutfit curProd={curProd} />
      <QnA />
      <RatingsAndReviews />
    </>
  );
}

export default App;
