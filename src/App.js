import React, { useState, useEffect } from "react";
import "./App.css";
import Editor from "./Editor";
import Previewer from "./Previewer";

const getDefaultContent = () => {
  return `
# H1 Heading
## H2 Heading
[Duck Duck Go](https://duckduckgo.com)
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function helloWorld() {
  return 'hello world'
}
\`\`\`

> Block Quotes!

You can also make text **bold**... whoa!

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

1. And there are numbered lists too.
1. Use just 1s if you want!

      `;
};

function App() {
  const [maximized, setMaximized] = useState("none");
  const [mdContent, setMdContent] = useState(() => getDefaultContent());

  useEffect(() => {
    console.log(`maximized`, maximized);
  }, [maximized]);

  return (
    <div className="App">
      <Editor
        maximized={maximized}
        setMaximized={setMaximized}
        mdContent={mdContent}
        setMdContent={setMdContent}
      />
      <Previewer
        maximized={maximized}
        setMaximized={setMaximized}
        mdContent={mdContent}
      />
    </div>
  );
}

export default App;
