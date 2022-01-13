import React, { useEffect } from "react";
import { useStateValue } from "../StateProvider";

// style
import "./header.css";

function Header({ spotify }) {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left"></div>
      <div className="header__right"></div>
    </div>
  );
}

export default Header;
