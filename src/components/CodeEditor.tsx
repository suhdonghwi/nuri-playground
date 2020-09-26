import React, { useState } from "react";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "../syntax.css";

const CodeEditor = () => {
  const [code, setCode] = useState("");

  return (
    <AceEditor
      value={code}
      onChange={setCode}
      mode="java"
      showGutter={false}
      height="100%"
      width="100%"
      style={{borderRadius: "10px", fontFamily: "D2Coding, monospace"}}
      fontSize={17}
      theme="github"
    />
  );
};

export default CodeEditor;
