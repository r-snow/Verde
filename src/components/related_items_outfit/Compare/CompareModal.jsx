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
        if (curFeat.value !== null) {
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
        } else if (compFeat.value !== null) {
          newFeat.compProdVal = compFeat.value;
        }
      } else if (compFeat.value !== null) {
        newFeat.compProdVal = compFeat.value;
        newFeat.curProdVal = '';
        newFeat.value = compFeat.feature;
        setFeatTab((prevFeatTab) => [...prevFeatTab, newFeat]);
      }
    });
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
          <tbody>
            <tr>
              <th className="column-title">{curProd.name}</th>
              <th className="column-title">Attribute</th>
              <th className="column-title">{compProd.name}</th>
            </tr>
            {featTab.map((feat) => (
              <tr key={feat.value}>
                <td className="table-data">{feat.curProdVal}</td>
                <td className="table-data">{feat.value}</td>
                <td className="table-data">{feat.compProdVal}</td>
              </tr>
            ))}
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
