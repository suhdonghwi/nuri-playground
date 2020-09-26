import React, { useState } from "react";

import Editor from "react-simple-code-editor";

// @ts-ignore
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "../syntax.css";

const CodeEditor = () => {
  const [code, setCode] = useState("");

  return (
    <Editor
      value={code}
      onValueChange={setCode}
      highlight={(code) => highlight(code, languages.js)}
      style={{height: "100%"}}
      padding={30}
    />
  );
};

export default CodeEditor;
