// components
import Body from '../Body';
import Sidebar from '../Sidebar';
import Footer from '../Footer';

// style
import "./player.css";

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
