import React from 'react';
import PropTypes from 'prop-types';

export default function Compare({ setOpenModal }) {
  return (
    <div className="compare-modal">
      <button
        className="compare-modal-close"
        type="button"
        onClick={() => setOpenModal(false)}
      >
        X
      </button>
      <h2>COMPARING</h2>
      <table>
        <tbody>
          <tr className="column-title">
            <th>Current Product Name</th>
            <th>Attribute</th>
            <th>Compare Product Name</th>
          </tr>
          <tr className="table-check">
            <td>&#10004;</td>
            <td>&#10004;</td>
            <td>&#10004;</td>
          </tr>
          <tr className="features">
            <td>Ultrasheen</td>
            <td>LightCompose</td>
            <td>100% Cotton</td>
          </tr>
          <tr className="table-check">
            <td>&#10004;</td>
            <td>&#10004;</td>
            <td>&#10004;</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

Compare.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
};
