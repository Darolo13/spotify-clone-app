// components
import Header from "../Header";

// State Provider
import { useStateValue } from "../StateProvider";

// style
import "./body.css";

function Body({ spotify }) {

  const [{ discover_weekly }, dispatch] = useStateValue();

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
    </div>
  );
}

export default Body;
