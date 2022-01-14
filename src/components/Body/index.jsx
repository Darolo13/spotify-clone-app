// components
import Header from "../Header";

// State Provider
import { useStateValue } from "../StateProvider";

// material-ui
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

// style
import "./body.css";

function Body({ spotify }) {

  const [{ discover_weekly }] = useStateValue();

  return (
    <div className="body">
      {/* Header */}
      <Header spotify={spotify} />

      <div className="body__info">
          <img src={discover_weekly?.images[0]?.url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        
      </div>
    </div>
  );
}

export default Body;
