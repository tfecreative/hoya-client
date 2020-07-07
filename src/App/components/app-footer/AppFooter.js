import React from "react";
import "./AppFooter.scss";

function AppFooter() {
  return (
    <footer className="app-footer">
      <div>
        © <a href="https://tfecreative.com">tfeCreative</a>
      </div>
      <a
        href="https://github.com/tfecreative"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="footer-icon fab fa-github" aria-hidden="true"></i>
      </a>
    </footer>
  );
}

export default AppFooter;
