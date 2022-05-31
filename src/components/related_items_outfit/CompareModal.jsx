import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Compare({ setOpenModal, curProd, compProd }) {
  const [curProdFeat, setCurProdFeats] = useState([]);
  const [compProdFeat, setCompProdFeats] = useState([]);

  // const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/';
  // useEffect(() => {
  //   axios
  //     .get(`${url}products/${productID}`, {
  //       headers: { Authorization: config.TOKEN },
  //     })
  //     .then((results) => setProduct(results.data));
  //   axios
  //     .get(`${url}products/${productID}/styles`, {
  //       headers: { Authorization: config.TOKEN },
  //     })
  //     .then((results) => setImage(results.data.results[0].photos[0].url));
  // }, [productID]);

  // const handleKeyPress = (event) => {
  //   event.preventDefault();
  //   if (event.key === 'Enter') {
  //     console.log('Clicking here will change overview product...');
  //   }
  // };

  return (
    <div className="compare-modal-container">
      <div
        className="compare-overlay"
        onClick={() => setOpenModal(false)}
        role="button"
        tabIndex={0}
        onKeyDown={() => setOpenModal(false)}
        aria-label="close modal with overlay"
      />
      <div className="compare-modal">
        <button
          className="compare-modal-close"
          type="button"
          onClick={() => setOpenModal(false)}
        >
          x
        </button>
        <h2>COMPARING</h2>
        <table className="table">
          <tbody className="table-body">
            <tr className="column-title">
              <th>{curProd.name}</th>
              <th>Attribute</th>
              <th>{compProd.name}</th>
            </tr>
            <tr className="table-row">
              <td>&#10004;</td>
              <td>Ultrasheen</td>
              <td>&#10004;</td>
            </tr>
            <tr className="table-row">
              <td>&#10004;</td>
              <td>Light Compose</td>
              <td>&#10004;</td>
            </tr>
            <tr className="table-row">
              <td>&#10004;</td>
              <td>100% Cotton</td>
              <td>&#10004;</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

Compare.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
  curProd: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  compProd: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
};
