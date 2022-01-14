import React, { useEffect } from "react";

// component
import useStateValue from "../StateProvider";

// material-ui
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";

// style
import "./footer.css";

function Footer({ spotify }) {
  const [{ token, item, playing }, dispatch] = useStateValue();

  // useEffect

  useEffect(() => {
    spotify.getMyCurrentPlaybackState().then((r) => {
      dispatch({
        type: "SET_PLAYING",
        playing: r.is_playing,
      });
      dispatch({
        type: "SET_ITEM",
        item: r.item,
      });
    });
  }, [spotify]);

  const handlePlayPause = () => {
      if (playing) {
        spotify.pause();
        dispatch({
            type: "SET_PLAYING",
            playing: false,
        });
      } else {
          spotify.play();
          dispatch({
              type: "SET_PLAYING",
              playing: true,
          });
      }
  };

  const skipToNext = () => {
      spotify.skipToNext();
      spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
              type: "SET_ITEM",
              item: r.item,
          });
          dispatch({
              type: "SET_PLAYING",
              playing: true,
          });
      });
  };

  const skipPrevious = () => {
      spotify.skipToPrevious();
      spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
              type: "SET_ITEM",
              item: r.item,
          });
          dispatch({
              type: "SET_PLAYING",
              playing: true,
          });
      });
  };

  return (
    <div className="footer">
      {/* Footer left section */}
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src={item?.album.images[0].url}
          alt={item?.name}
        />
        {item ? (
          <div className="footer__songInfo">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer__songInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>
      {/* Footer center section */}
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon onClick={skipToNext} className="footer__icon" />
        {playing ? (
          <PauseCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
          />
        ) : (
          <PlayCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
          />
        )}
        <SkipNextIcon onClick={skipPrevious} className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
    </div>
  );
}

export default Footer;
