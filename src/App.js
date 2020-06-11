import React from 'react';
import './App.css';
import Dineer from './dineer.js';

function App() {
  return (
    <div className="App">
      <Dineer dishName="Samosa" sweetName="Multini Halwa" />
      <hr />
      <Dineer dishName="Chola" sweetName="Darra Methai" />
      <hr />
      <Dineer dishName="Khurkha" sweetName="Karak Jalibi" />
    </div>
  );
}

export default App;
