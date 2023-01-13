import React from 'react';
import { useState } from 'react';

import './Catchphrase.css';

export default function Catchphrase() {
  const [catchphrases, setCatchphrases] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    setCatchphrases((prevValue) => [...prevValue, inputValue]);
    setInputValue('');
  };
  return (
    <div className="catchphrase-container">
      <input type="text" value={inputValue} onChange={handleInput}></input>
      <button onClick={handleSubmit}>Submit</button>
      <label>Add a catchphrase</label>
      <ul>
        {catchphrases.map((catchphrase) => {
          return <li key={catchphrase}>{catchphrase}</li>;
        })}
      </ul>
    </div>
  );
}
