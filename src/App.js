import React from 'react';
import './App.css';
import './CurrencyRow';
import CurrencyRow from './CurrencyRow';

function App() {
  return (
		<>
   <h1>Hello World</h1>
	 <CurrencyRow />
	 <div className="equals">=</div>
	 <CurrencyRow />
  </>
	);
}

export default App;
