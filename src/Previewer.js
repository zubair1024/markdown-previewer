import React from "react";
import marked from "marked";
import "./Previewer.css";

export default function Previewer({ mdContent, maximized, setMaximized }) {
  const maximize = () => {
    if (maximized === "previewer") return setMaximized("both");
    return setMaximized("previewer");
  };
  const getMarkdownText = () => {
    const rawMarkup = marked(mdContent, { sanitize: true });
    return { __html: rawMarkup };
  };

  const customPreviewerStyles = {
    display: maximized === "editor" ? "none" : undefined,
    height: maximized === "previewer" ? "90vh" : undefined,
    marginTop: maximized === "previewer" ? "0" : "2rem",
  };

  return (
    <div className="previewer" style={customPreviewerStyles}>
      <div className="header">
        <span className="header-heading">
          <b>Previewer</b>
        </span>
        <span onClick={maximize}>
          {maximized === "previewer" ? (
            <i className="fa fa-window-minimize" aria-hidden="true"></i>
          ) : (
            <i className="fa fa-window-maximize" aria-hidden="true"></i>
          )}
        </span>
      </div>
      <div
        className="content-previewer"
        style={{ height: maximized === "previewer" ? "93%" : undefined }}
      >
        <div id="preview" dangerouslySetInnerHTML={getMarkdownText()}></div>
      </div>
    </div>
  );
}
