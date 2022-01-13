// spotify token
import { getTokenFromResponse } from "../../spotify";

// State Provider
import { useStateValue } from "../StateProvider";

// material-ui
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

// component
import SideBarOption from "./SideBarOption";

// style
import "./sidebar.css";

function Sidebar() {

    const [{ playlists }] = useStateValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SideBarOption Icon={HomeIcon} option="Home" />
      <SideBarOption Icon={SearchIcon} option="Search" />
      <SideBarOption Icon={LibraryMusicIcon} option="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
          <SideBarOption option={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
