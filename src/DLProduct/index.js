import React from 'react';

const products = [
  'https://platform.descarteslabs.com/raster/v2/xyz/2f0d26c966d54dbe15e9e381d9ae5c8308f5822d/{z}/{x}/{y}.png',
  'https://platform.descarteslabs.com/raster/v2/xyz/6ba8e3a0126332f32850bfc3f1e334e4303f81f0/{z}/{x}/{y}.png',
  'https://platform.descarteslabs.com/raster/v2/xyz/db4c81332676e84e510f4ad0b1cd80ea723eb049/{z}/{x}/{y}.png'
];

const productBoxes = products.map((p, idx) => {
  return (
    <div key={`each_product_box_${idx}`} className="each_product">
      {p}
    </div>
  );
});
function DLProduct() {
  return <div className="selection_box">{productBoxes}</div>;
}

export default DLProduct;
