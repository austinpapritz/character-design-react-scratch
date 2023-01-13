import React from 'react';
import { useState } from 'react';

import './Catchphrase.css';

export default function Catchphrase({ catchphrases, setCatchphrases }) {
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
        {catchphrases.map((a) => {
          return <li key={a}>{a}</li>;
        })}
      </ul>
    </div>
  );
}
