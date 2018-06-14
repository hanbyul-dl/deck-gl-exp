import React from 'react';

import taxiData from '../assets/taxi';
import lineData from '../assets/sample-line';

const products = [
  {
    label: 'taxi data (point)',
    type: 'point',
    data: taxiData
  },
  {
    label: 'sampleLineData',
    type: 'line',
    data: lineData
  }
];
const productBoxes = products.map((p, idx) => {
  return (
    <div key={`each_product_box_${idx}`} className="each_product">
      {p.label}
    </div>
  );
});
function VectorData() {
  return <div className="selection_box">{productBoxes}</div>;
}

export default VectorData;
