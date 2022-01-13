import React from "react";
import { useStateValue } from "../StateProvider";

// material-ui
import SearchIcon from "@material-ui/icons/Search";

// style
import "./header.css";

function Header({ spotify }) {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts"
          type="text"
        />
      </div>
      <div className="header__right"></div>
    </div>
  );
}

export default Header;
