import React from 'react';
import { useState } from 'react';
import './Editor.css';

import Catchphrase from '../Catchphrase/Catchphrase.js';
import Scoreboard from '../Scoreboard/Scoreboard.js';

export default function Editor({ setHead, setBody, setBottom }) {
  const [headCount, setHeadCount] = useState(0);
  const [bodyCount, setBodyCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);

  const handleHead = (e) => {
    setHead(e.target.value);
    setHeadCount(headCount + 1);
  };

  const handleBody = (e) => {
    setBody(e.target.value);
    setBodyCount(bodyCount + 1);
  };

  const handleBottom = (e) => {
    setBottom(e.target.value);
    setBottomCount(bottomCount + 1);
  };

  return (
    <div className="editor-container">
      <div className="editor-content">
        <select className="head-select" onChange={handleHead}>
          <option value="bird">Bird</option>
          <option value="dog">Dog</option>
          <option value="duck">Duck</option>
          <option value="horse">Horse</option>
        </select>
        <label>Select a head</label>
        <select className="body-select" onChange={handleBody}>
          <option value="blue">Blue</option>
          <option value="dress">Dress</option>
          <option value="pink">Pink</option>
          <option value="red">Red</option>
        </select>
        <label>Select a body</label>
        <select className="bottom-select" onChange={handleBottom}>
          <option value="blue">Blue</option>
          <option value="dog">Dog</option>
          <option value="leg">Leg</option>
          <option value="white">White</option>
        </select>
        <label>Select a bottom</label>
        <Scoreboard headCount={headCount} bodyCount={bodyCount} bottomCount={bottomCount} />
        <Catchphrase />
      </div>
    </div>
  );
}
