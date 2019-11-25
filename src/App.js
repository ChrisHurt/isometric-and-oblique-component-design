import React from 'react';
import logo from './logo.svg';
import './App.css';
import RectangularPrism from "./components/iso-rectangular-prism"

function App() {
  return (
    <div className="App">
      <RectangularPrism
        width={100}
        length={20}
        height={10}
      />
    </div>
  );
}

export default App;
