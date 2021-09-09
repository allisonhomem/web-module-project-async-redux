import './App.css';
// import React, {useEffect} from 'react';
// import {fetchQuotes} from './actions/index.js';
import QuoteContainer from './components/QuoteContainer.js';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1> Motivational Quote Generator </h1>
      </header>
      <QuoteContainer/>
    </div>
  );
}

export default App;
