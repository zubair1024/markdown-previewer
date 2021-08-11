import React from "react";
import "./Editor.css";

export default function Editor({
  mdContent,
  setMdContent,
  maximized,
  setMaximized,
}) {
  const setMdContentValue = (e) => {
    const content = e.target.value;
    setMdContent(content);
  };

  const maximize = () => {
    if (maximized === "editor") return setMaximized("both");
    return setMaximized("editor");
  };

  const customEditorStyles = {
    display: maximized === "previewer" ? "none" : undefined,
    height: maximized === "editor" ? "90vh" : undefined,
  };

  return (
    <div className="editor" style={customEditorStyles}>
      <div className="header">
        <span className="header-heading">
          <b>Editor</b>
        </span>
        <span onClick={maximize}>
          {maximized === "editor" ? (
            <i className="fa fa-window-minimize" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-window-maximize" aria-hidden="true"></i>
          )}
        </span>
      </div>
      <div className="content-editor">
        <textarea
          id="editor"
          value={mdContent}
          onChange={setMdContentValue}
          rows="5"
          cols="30"
          spellCheck="true"
          style={{
            resize: "vertical",
            minHeight: "200px",
            width: "100%",
            height: maximized === "editor" ? "84vh" : undefined,
          }}
        />
      </div>
    </div>
  );
}
