import React from 'react';
import BaseMap from './Map';
import './App.css';
import CustomVectorData from './CustomVectordata';
import DLProduct from './DLProduct';

function App() {
  return (
    <div className="container">
      <DLProduct />
      <CustomVectorData />
      <BaseMap />
    </div>
  );
}

export default App;
