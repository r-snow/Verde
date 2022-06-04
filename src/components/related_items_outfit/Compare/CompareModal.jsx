import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export default function Compare({ setOpenModal, curProd, compProd }) {
  const [featTab, setFeatTab] = useState([]);

  useEffect(() => {
    curProd.features.forEach((curFeat) => {
      const newFeat = {};
      let isNew = true;

      featTab.forEach((tableFeat) => {
        if (tableFeat.value === curFeat.feature) {
          isNew = false;
        }
      });
      if (isNew === true) {
        if (curFeat.value === null) {
          newFeat.curProdVal = '';
        } else {
          newFeat.curProdVal = curFeat.value;
        }
        newFeat.value = curFeat.feature;
        newFeat.comProdVal = '';
        setFeatTab((prevFeatTab) => [...prevFeatTab, newFeat]);
      }
    });

    compProd.features.forEach((compFeat) => {
      const newFeat = {};
      let isAlsoNew = true;
      let curTableFeat = '';

      featTab.forEach((tableFeat) => {
        if (tableFeat.value === compFeat.feature) {
          isAlsoNew = false;
          curTableFeat = tableFeat;
        }
      });

      if (isAlsoNew === false) {
        if (curTableFeat.curProdVal === compFeat.value) {
          newFeat.curProdVal = true;
          newFeat.compProdVal = true;
        } else if (compFeat.value === null) {
          newFeat.compProdVal = '';
        } else {
          newFeat.compProdVal = compFeat.value;
        }
      } else {
        if (compFeat.value === null) {
          newFeat.compProdVal = '';
        } else {
          newFeat.compProdVal = compFeat.value;
        }
        newFeat.curProdVal = '';
        newFeat.value = compFeat.feature;
        setFeatTab((prevFeatTab) => [...prevFeatTab, newFeat]);
      }
    });

    console.log(featTab);
  });

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
              <td className="atts">Lenses</td>
              <td className="atts">UV Protection</td>
              <td className="atts">Frames</td>
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
