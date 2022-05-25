import React from 'react';
import PropTypes from 'prop-types';

export default function Compare({ setOpenModal }) {
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
          <tr className="column-title">
            <th>Current Product Name</th>
            <th>Attribute</th>
            <th>Compare Product Name</th>
          </tr>
          <tbody className="table-body">
            <tr className="table-row">
              <td>&#10004;</td>
              <td>&#10004;</td>
              <td>&#10004;</td>
            </tr>
            <tr className="table-row">
              <td>Ultrasheen</td>
              <td>Light Compose</td>
              <td>100% Cotton</td>
            </tr>
            <tr className="table-row">
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
};
