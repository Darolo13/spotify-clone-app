// style
import "./songrow.css";

function SongRow({ track, playSong }) {
  return <div className="songRow" onClick={() => playSong(track.id)}>
      <img className="songRow__album" src={track.album.images[0].url} alt="" />
  </div>;
}

export default SongRow;
