import React, { useState } from 'react';
import './CodeEditor.css';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleCodeChange = (event) => {
    setCode(event.target.value);
    Prism.highlightAll(); // Highlight the code after every change
  };

  return (
    <div className="container">
      <h1 className="title">react-simple-code-editor</h1>
      <p className="description">
        A simple no-frills code editor with syntax highlighting.
      </p>
      <a href="https://github.com/your-username/react-simple-code-editor" className="github-button">
        GitHub
      </a>
      <textarea
        className="code-editor"
        value={code}
        onChange={handleCodeChange}
      />
      {/* <pre className="code-output">
        <code className="language-javascript">{code}</code>
      </pre> */}
    </div>
  );
};

export default CodeEditor;