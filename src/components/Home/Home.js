import React from 'react';
import { useState } from 'react';

import './Home.css';

import Preview from '../Preview/Preview.js';
import Editor from '../Editor/Editor.js';

export default function Home() {
  const [head, setHead] = useState('bird');
  const [body, setBody] = useState('blue');
  const [bottom, setBottom] = useState('blue');

  return (
    <main>
      <Preview head={head} body={body} bottom={bottom} />
      <Editor setHead={setHead} setBody={setBody} setBottom={setBottom} />
    </main>
  );
}
