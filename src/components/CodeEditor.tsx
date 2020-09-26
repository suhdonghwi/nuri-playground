import React from "react";

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";
import "../syntax.css";

interface CodeEditorProps {
  value: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
}
const CodeEditor = ({value, onChange, readOnly}: CodeEditorProps) => {
  return (
    <AceEditor
      value={value}
      onChange={onChange}
      mode="python"
      showGutter={false}
      height="100%"
      width="100%"
      readOnly={readOnly}
      style={{fontFamily: "D2Coding, monospace"}}
      fontSize={18}
      theme="github"
    />
  );
};

export default CodeEditor;
