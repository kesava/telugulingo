import React from 'react';
import './App.css';
import Carousel from './components/carousel';
import { varnamala } from './data/lesson1';

function App() {
  return (
    <div className="App">
        <Carousel characters={varnamala.vowels} />
    </div>
  );
}

export default App;
