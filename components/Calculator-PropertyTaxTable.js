// components/TaxTable.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const taxData = [
  { state: 'AL', median: '0.41%', mean: '0.40%', medianValue: '$157,100', tax: '$646' },
  { state: 'AK', median: '1.23%', mean: '1.04%', medianValue: '$282,800', tax: '$3,464' },
  { state: 'AZ', median: '0.62%', mean: '0.63%', medianValue: '$265,600', tax: '$1,648' },
  { state: 'AR', median: '0.62%', mean: '0.64%', medianValue: '$142,100', tax: '$878' },
  { state: 'CA', median: '0.75%', mean: '0.75%', medianValue: '$573,200', tax: '$4,279' },
  { state: 'CO', median: '0.51%', mean: '0.55%', medianValue: '$397,500', tax: '$2,017' },
  { state: 'CT', median: '2.15%', mean: '1.79%', medianValue: '$286,700', tax: '$6,153' },
  { state: 'DE', median: '0.58%', mean: '0.61%', medianValue: '$269,700', tax: '$1,570' },
  { state: 'FL', median: '0.86%', mean: '0.91%', medianValue: '$248,700', tax: '$2,143' },
  { state: 'GA', median: '0.90%', mean: '0.92%', medianValue: '$206,700', tax: '$1,850' },
  { state: 'HI', median: '0.29%', mean: '0.32%', medianValue: '$662,100', tax: '$1,893' },
  { state: 'IL', median: '2.23%', mean: '2.08%', medianValue: '$212,600', tax: '$4,744' },
  { state: 'TX', median: '1.74%', mean: '1.68%', medianValue: '$202,600', tax: '$3,520' },
  { state: 'NJ', median: '2.47%', mean: '2.24%', medianValue: '$355,700', tax: '$8,797' },
  { state: 'NY', median: '1.73%', mean: '1.40%', medianValue: '$340,600', tax: '$5,884' },
  { state: 'WA', median: '0.94%', mean: '0.87%', medianValue: '$397,600', tax: '$3,752' },
  { state: 'WI', median: '1.73%', mean: '1.61%', medianValue: '$200,400', tax: '$3,472' },
  // Add more states as needed
];

const TaxTable = () => {
  return (
    <div className="container mt-4">
      <h3 className="text-center mb-3">U.S. Property Tax Statistics</h3>

      <div style={{ maxHeight: '400px', overflowY: 'auto' }} className="table-responsive">
        <table className="table table-striped table-bordered text-center">
          <thead className="table-dark sticky-top">
            <tr>
              <th>State</th>
              <th>Median Tax Rate</th>
              <th>Mean Tax Rate</th>
              <th>Median Home Value</th>
              <th>Median Property Tax Paid</th>
            </tr>
          </thead>
          <tbody>
            {taxData.map((item, index) => (
              <tr key={index}>
                <td>{item.state}</td>
                <td>{item.median}</td>
                <td>{item.mean}</td>
                <td>{item.medianValue}</td>
                <td>{item.tax}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaxTable;
