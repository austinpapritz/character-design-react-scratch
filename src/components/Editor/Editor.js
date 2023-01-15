import React from 'react';
import { useState } from 'react';
import './Editor.css';

import Catchphrase from '../Catchphrase/Catchphrase.js';
import Scoreboard from '../Scoreboard/Scoreboard.js';

export default function Editor({ setHead, setBody, setBottom }) {
  let headArr = ['bird', 'dog', 'duck', 'horse'];
  let bodyArr = ['blue', 'dress', 'pink', 'red'];
  let bottomArr = ['blue', 'dog', 'leg', 'white'];

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
          {headArr.map((head, i) => {
            i++;
            return (
              <option key={i} value={head} className="option">
                {head}
              </option>
            );
          })}
        </select>
        <label>Select a head</label>
        <select className="body-select" onChange={handleBody}>
          {bodyArr.map((body, j) => {
            j++;
            return (
              <option key={j} value={body} className="option">
                {body}
              </option>
            );
          })}
        </select>
        <label>Select a body</label>
        <select className="bottom-select" onChange={handleBottom}>
          {bottomArr.map((bottom, k) => {
            k++;
            return (
              <option key={k} value={bottom} className="option">
                {bottom}
              </option>
            );
          })}
        </select>
        <label>Select a bottom</label>
        <Scoreboard headCount={headCount} bodyCount={bodyCount} bottomCount={bottomCount} />
        <Catchphrase />
      </div>
    </div>
  );
}
