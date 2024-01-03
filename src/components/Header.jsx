import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";

function Header(props) {
  return (
    <header>
      <h1>
        <HighlightIcon />
        Keeper
      </h1>
      <div className="toggle">
        <input type="checkbox" className="checkbox" id="checkbox" onChange={props.toggle} />
        <label htmlFor="checkbox" className="checkbox-label">
          <i className="fas fa-moon"></i>
          <i className="fas fa-sun"></i>
          <span className="ball"></span>
        </label>
      </div>
    </header>
  );
}

export default Header;
