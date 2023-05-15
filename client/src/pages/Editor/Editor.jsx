import React, { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { java } from "@codemirror/lang-java";
import { cpp } from "@codemirror/lang-cpp";
import * as api from "../../api/index";
import { useRef } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import './Editor.css';

function Editor() {
  const code = useRef();
  const initialCode = {
    java: `// JAVA

public class Main{
  public static void main(string args[]){
    System.out.println('Hello CodRella');
  }
}`,
    c: `// C

#include <stdio.h>
int main() {
  printf("Hello CodRella");
  return 0;
}`,
    cpp: `// C++

#include <iostream>

int main() {
  std::cout << "Hello World!";
  return 0;
}`,
    python: `# PYTHON

print('Hello CodeRella')`,
  };
  const [lang, setLang] = useState("");
  const [output, setOutput] = useState("");

  const handleLangSelect = (e) => {
    setLang(e.target.value);
  };

  const executeCode = () => {
    const codeToExecute = code.current.editor.getValue();
    api.codeCompile(codeToExecute, lang).then((res) => {
      setOutput(res.data.output);
    });
  };

  return (
    <>
      <Grid container spacing={2} style={{height: "100vh"}}>
        <Grid xs={4} style={{padding:'2%'}}>
          <div className="question">Question</div>
        </Grid>
        <Grid xs={8} style={{ border: "2px solid black",height:"100%" }}>
          <div className="editorComponent">
            <div className="language">
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-autowidth-label">
                  Language
                </InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={lang}
                  onChange={handleLangSelect}
                  label="Language"
                  defaultValue={{ label: "C", value: "c" }}
                >
                  <MenuItem value="c">C</MenuItem>
                  <MenuItem value="python">Python</MenuItem>
                  <MenuItem value="java">Java</MenuItem>
                  <MenuItem value="cpp">C++</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="cMirror">
              <CodeMirror
                className="codeMirror"
                ref={code}
                value={initialCode[lang]}   
                extensions={[java()]}
                // height=""
                // maxHeight="700px"
              />
              <button onClick={executeCode}>Run</button>
              <div className="output">{output}</div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default Editor;
