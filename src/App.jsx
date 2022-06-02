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
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    if (localCart.length) {
      const [newCount, newSku] = [
        localCart[localCart.length - 1].count,
        localCart[localCart.length - 1].skuId,
      ];
      for (let i = 0; i < localCart.length - 1; i += 1) {
        if (localCart[i].skuId === newSku) {
          setLocalCart((prevCart) => {
            const newCart = prevCart.slice();
            newCart[i].count = (
              Number(newCount) + Number(newCart[i].count)
            ).toString();
            return newCart.slice(0, prevCart.length - 1);
          });
        }
      }
    }
    localStorage.setItem('localCart', JSON.stringify(localCart));
    console.log(localCart);
  }, [localCart]);

  const deleteCartItem = (idx) => {
    setLocalCart((prevCart) => {
      const newCart = [...prevCart.slice(0, idx), ...prevCart.slice(idx + 1)];
      for (let i = 0; i < newCart.length; i += 1) {
        newCart[i].idx = i;
      }
      return newCart.slice();
    });
  };

  return (
    <>
      <Header
        localCart={localCart}
        showDrawer={showDrawer}
        setShowDrawer={setShowDrawer}
        deleteCartItem={deleteCartItem}
      />
      <Overview setLocalCart={setLocalCart} setShowDrawer={setShowDrawer} />
      <RelatedItems curProd={curProd} setCurProd={setCurProd} />
      <YourOutfit curProd={curProd} />
      <QnA />
      <RatingsAndReviews />
    </>
  );
}

export default App;
