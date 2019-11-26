import React from 'react';
import logo from './logo.svg';
import './App.css';
import RectangularPrism from "./components/iso-rectangular-prism"

function App() {
  return (
    <div className="App">
      <RectangularPrism
        outsideDimensions={
          {
            // width: 10,
            // length: 100,
            // height: 20
          }
        }
        hole={
          {
            // width: 1,
            // length: 10,
            // height: 2,
            // xOffset: 5,
            // yOffset: 5
          }
        }
      />
    </div>
  );
}

export default App;
