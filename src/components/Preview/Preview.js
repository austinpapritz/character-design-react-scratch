import React from 'react';
import './Preview.css';

export default function Preview() {
  return (
    <div className="preview-container">
      <div className="head-container">
        <div className="head">Head</div>
        <div className="catchphrase-container">Catchphrase</div>
      </div>
      <div className="body">Body</div>
      <div className="bottom">Bottom</div>
    </div>
  );
}
