import React from 'react';
import { useState } from 'react';

import './Home.css';

import Preview from '../Preview/Preview.js';
import Editor from '../Editor/Editor.js';

export default function Home() {
  const [head, setHead] = useState('bird');

  return (
    <main>
      <Preview head={head} />
      <Editor setHead={setHead} />
    </main>
  );
}
