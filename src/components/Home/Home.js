import React from 'react';
import { useState } from 'react';

import './Home.css';

import Preview from '../Preview/Preview.js';
import Editor from '../Editor/Editor.js';

export default function Home() {
  const [setHead] = useState('Head');

  return (
    <main>
      <Preview />
      <Editor setHead={setHead} />
    </main>
  );
}
