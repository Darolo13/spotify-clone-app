// components
import Body from '../Body';

// style
import "./player.css";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Body spotify={spotify} />
      </div>
    </div>
  );
}

export default Player;
