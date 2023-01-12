import React from 'react';
import './Home.css';

import Preview from '../Preview/Preview.js';
import Editor from '../Editor/Editor.js';

export default function Home() {
  return (
    <main>
      <Preview />
      <Editor />
    </main>
  );
}
