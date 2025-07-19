// components/CalculatorTopRow.js
import React from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

const CalculatorTopRow = ({ homePrice, setHomePrice, monthlyPayment }) => {
  return (
    <div className="bg-light py-4 px-5">
      <div className="row align-items-center">
        {/* Home Price Input */}
        <div className="col-md-4 mb-3">
          <label className="form-label fw-semibold">Home price</label>
          <InputGroup>
            <InputGroup.Text>$</InputGroup.Text>
            <FormControl
              type="number"
              value={homePrice}
              onChange={(e) => setHomePrice(e.target.value)}
              className="fs-4 fw-bold"
            />
          </InputGroup>
        </div>

        {/* Monthly Payment */}
        <div className="col-md-4 mb-3 text-center">
          <label className="form-label fw-semibold">Monthly payment</label>
          <h3 className="fw-bold display-6">${monthlyPayment}/mo</h3>
        </div>

        {/* Get Pre-approved */}
        <div className="col-md-4 mb-3 text-md-end text-center">
          <Button
            className="px-4 py-2 fw-semibold"
            style={{ backgroundColor: '#03593c', border: 'none' }}
          >
            Get pre-approved
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CalculatorTopRow;
