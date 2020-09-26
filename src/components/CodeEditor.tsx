import React, { useState } from "react";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";
import "../syntax.css";

const CodeEditor = () => {
  const [code, setCode] = useState("");

  return (
    <AceEditor
      value={code}
      onChange={setCode}
      mode="python"
      showGutter={false}
      height="100%"
      width="100%"
      style={{fontFamily: "D2Coding, monospace"}}
      fontSize={18}
      theme="github"
    />
  );
};

export default CodeEditor;
