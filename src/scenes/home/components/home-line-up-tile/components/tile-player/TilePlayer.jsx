import _ from "lodash";
import React, { useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "../../../../../../components/container";
import PlayerHeader from "./components/player-header";
import PlayerList from "./components/player-list";
import PlayerListItem from "./components/player-list-item";

const PlayerContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 500px;
`;

const TilePlayer = ({ eventTracks }) => {
  const audioRef = React.useRef();

  const [currentTrackIndex, setCurrentTrackIndex] = React.useState(0);
  const [currentTrackPlayed, setCurrentTrackPlayed] = React.useState(false);
  const [currentTrackDuration, setCurrentTrackDuration] = React.useState(0);
  const [currentTrackTime, setCurrentTrackTime] = React.useState(0);

  const playCurrentTrack = () => {
    setCurrentTrackPlayed(true);
    audioRef.current.play();
  };

  const pauseCurrentTrack = () => {
    setCurrentTrackPlayed(false);
    audioRef.current.pause();
  };

  const playTrack = React.useCallback((nextCurrentTrackIndex) => {
    setCurrentTrackIndex(nextCurrentTrackIndex);
    audioRef.current.load();
    playCurrentTrack();
  }, []);

  const stepBackwardCurrentTrack = () => {
    playTrack(currentTrackIndex - 1 < 0 ? eventTracks.length - 1 : currentTrackIndex - 1);
  };

  const stepForwardCurrentTrack = React.useCallback(() => {
    playTrack(currentTrackIndex + 1 >= eventTracks.length ? 0 : currentTrackIndex + 1);
  }, [playTrack, currentTrackIndex, eventTracks]);

  const getCurrentTrackData = () => {
    setCurrentTrackDuration(audioRef.current.duration);
    setCurrentTrackTime(audioRef.current.currentTime);
  };

  const getCurrentTrackTime = () => {
    setCurrentTrackTime(audioRef.current.currentTime);
  };

  // This is done to avoid skipping track by reaching end while draging!

  const reachCurrentTrackEnd = useCallback(() => {
    if (!currentTrackPlayed) return;
    stepForwardCurrentTrack();
  }, [currentTrackPlayed, stepForwardCurrentTrack]);

  const setAudioTime = (time) => {
    audioRef.current.currentTime = time;
  };

  React.useEffect(() => {
    audioRef.current.addEventListener("loadeddata", getCurrentTrackData);
    audioRef.current.addEventListener("timeupdate", getCurrentTrackTime);
    audioRef.current.addEventListener("ended", reachCurrentTrackEnd);

    return () => {
      /* eslint-disable */

      audioRef.current.removeEventListener("loadeddata", getCurrentTrackData);
      audioRef.current.removeEventListener("timeupdate", getCurrentTrackTime);
      audioRef.current.removeEventListener("ended", reachCurrentTrackEnd);

      /* eslint-disable */
    };
  }, [reachCurrentTrackEnd]);

  const currentTrack = eventTracks[currentTrackIndex].track;

  return (
    <PlayerContainer>
      <PlayerHeader
        // eslint-disable-line
        currentTrackName={currentTrack.name}
        currentTrackArtists={currentTrack.artists}
        currentTrackPlayed={currentTrackPlayed}
        currentTrackDuration={currentTrackDuration}
        currentTrackTime={currentTrackTime}
        playCurrentTrack={playCurrentTrack}
        pauseCurrentTrack={pauseCurrentTrack}
        stepBackwardCurrentTrack={stepBackwardCurrentTrack}
        stepForwardCurrentTrack={stepForwardCurrentTrack}
        setAudioTime={setAudioTime}
      />
      <PlayerList>
        {_.map(eventTracks, (track, trackIndex) => {
          const {
            track: { id: trackId, name: trackName, artists: trackArtists },
          } = track;
          return (
            <PlayerListItem
              // eslint-disable-line
              key={trackId}
              currentTrackIndex={currentTrackIndex}
              currentTrackPlayed={currentTrackPlayed}
              trackIndex={trackIndex}
              trackName={trackName}
              trackArtists={trackArtists}
              playTrack={playTrack}
            />
          );
        })}
      </PlayerList>
      {/* eslint-disable-next-line */}
      <audio ref={audioRef}>
        <source src={currentTrack.preview_url} />
      </audio>
    </PlayerContainer>
  );
};

TilePlayer.propTypes = {
  eventTracks: PropTypes.array.isRequired, // eslint-disable-line
};

export default TilePlayer;
