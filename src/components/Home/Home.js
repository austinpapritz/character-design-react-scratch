import React from 'react';

import Preview from '../Preview/Preview.js';
import Editor from '../Editor/Editor.js';

import Background from './bg.jpeg';

export default function Home() {
  return (
    <main style={{ backgroundImage: `url('${Background}')` }}>
      <Preview />
      <Editor />
    </main>
  );
}
