import React from 'react';
import './Editor.css';

import Catchphrase from '../Catchphrase/Catchphrase';
import Scoreboard from '../Scoreboard/Scoreboard';

export default function Editor() {
  return (
    <div className="editor-container">
      <select className="head-select">
        <option value="bird">Bird</option>
        <option value="dog">Dog</option>
        <option value="duck">Duck</option>
        <option value="horse">Horse</option>
      </select>
      <label>Select a head</label>
      <select className="body-select">
        <option value="blue">Blue</option>
        <option value="dress">Dress</option>
        <option value="pink">Pink</option>
        <option value="red">Red</option>
      </select>
      <label>Select a body</label>
      <select className="bottom-select">
        <option value="blue">Blue</option>
        <option value="dog">Dog</option>
        <option value="legs">Legs</option>
        <option value="white">White</option>
      </select>
      <label>Select a bottom</label>
      <Catchphrase />
      <Scoreboard />
    </div>
  );
}
