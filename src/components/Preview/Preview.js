import React from 'react';
import './Preview.css';

export default function Preview({ head, body, bottom }) {
  return (
    <div className="preview-container">
      <div
        className="head"
        style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/${head}-head.png')` }}
      ></div>

      <div
        className="body"
        style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/${body}-middle.png')` }}
      ></div>
      <div
        className="bottom"
        style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/assets/${bottom}-pants.png')` }}
      ></div>
    </div>
  );
}
