import React /* , { useState, useEffect } */ from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export default function Compare({ setOpenModal, curProd, compProd }) {
  // const [featTab, setFeatTab] = useState([]);

  // useEffect(() => {
  //   const newFeat = {};

  //   const addFeats = (prod) => {
  //     prod.features.forEach((feat) => {
  //       let isNew = true;
  //       featTab.forEach((tableFeat) => {
  //         if (tableFeat === feat.feature) {
  //           isNew = false;
  //         }
  //       });

  //       if (isNew === true) {
  //         newFeat.value = feat;
  //       }
  //     });
  //   };

  //   addFeats(curProd);
  //   addFeats(compProd);

  //   const addVals = (prod) => {
  //     prod.features.forEach((feat) => {});
  //   };
  // });

  return (
    <div
      className="compare-modal-container"
      onClick={() => setOpenModal(false)}
      role="button"
      tabIndex={0}
      onKeyDown={() => setOpenModal(false)}
      aria-label="close modal with overlay"
    >
      <div className="compare-modal">
        <FontAwesomeIcon
          className="compare-modal-close"
          icon={faCircleXmark}
          size="lg"
          type="button"
          onClick={() => setOpenModal(false)}
        />
        <h2 className="compare-modal-header">COMPARING</h2>
        <table className="table">
          <tbody className="table-body">
            <tr className="table-column">
              <th className="column-title">{curProd.name}</th>
              <td>&#10004;</td>
              <td>&#10004;</td>
              <td>&#10004;</td>
            </tr>
            <tr className="table-column">
              <th className="column-title">Attribute</th>
            </tr>
            <tr className="table-column">
              <th className="column-title">{compProd.name}</th>
              <td>&#10004;</td>
              <td>&#10004;</td>
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
