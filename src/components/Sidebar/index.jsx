// spotify token
import { getTokenFromResponse } from "../../spotify";

// State Provider
import { useStateValue } from "../StateProvider";

// material-ui
// import SearchIcon from "@material-ui/icons/Search";

// style
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
    </div>
  );
}

export default Sidebar;
