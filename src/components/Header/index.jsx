import React from "react";
import { useStateValue } from "../StateProvider";

// material-ui
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

// style
import "./header.css";

function Header({ spotify }) {
    const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          placeholder="Search for Artists, Songs, or Podcasts "
          type="text"
        />
      </div>
      <div className="header__right">
        <Avatar alt={user?.display_name} src={user?.images[0]?.url} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
