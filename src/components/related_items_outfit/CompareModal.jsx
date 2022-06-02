import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export default function Compare({ setOpenModal, curProd, compProd }) {
  const [curProdFeat, setCurProdFeats] = useState([]);
  const [compProdFeat, setCompProdFeats] = useState([]);

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
