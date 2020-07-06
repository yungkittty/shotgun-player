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
  width: 100%;
  max-height: 500px;
`;

const TilePlayer = ({
  // eslint-disable-line
  eventTracks,
  eventTracksLiked,
  setEventTracksLiked,
  setEventTracksLikable,
}) => {
  const audioRef = React.useRef();

  const [tracks, setTracks] = React.useState({});
  const [tracksIds, setTracksIds] = React.useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = React.useState(0);
  const [currentTrackPlayed, setCurrentTrackPlayed] = React.useState(false);
  const [currentTrackDuration, setCurrentTrackDuration] = React.useState(0);
  const [currentTrackTime, setCurrentTrackTime] = React.useState(0);

  const tracksLikedRef = React.useRef(0);

  const playCurrentTrack = () => {
    setCurrentTrackPlayed(true);
    audioRef.current.play();
  };

  const pauseCurrentTrack = () => {
    setCurrentTrackPlayed(false);
    audioRef.current.pause();
  };

  const resetCurrentTrack = () => {
    setCurrentTrackIndex(0);
    setCurrentTrackPlayed(false);
    audioRef.current.pause();
    audioRef.current.load();
  };

  const playTrack = React.useCallback((trackIndex) => {
    setCurrentTrackIndex(trackIndex);
    audioRef.current.load();
    playCurrentTrack();
  }, []);

  React.useEffect(() => {
    setTracks((prevCurrentTracks) => {
      const nextCurrentTrackIds = [];
      if (eventTracksLiked) {
        const nextCurrentTracks = _.reduce(
          prevCurrentTracks,
          (nextCurrentTracksOthers, prevCurrentTrack, prevCurrentTrackId) => {
            if (!prevCurrentTrack.liked) return nextCurrentTracksOthers;
            nextCurrentTrackIds.push(prevCurrentTrackId);
            return { ...nextCurrentTracksOthers, [prevCurrentTrackId]: prevCurrentTrack };
          },
          {}
        );
        setTracksIds(nextCurrentTrackIds);
        return nextCurrentTracks;
      }
      const nextCurrentTracks = _.reduce(
        eventTracks,
        (nextCurrentTracksOthers, { track: eventTrack }) => {
          const nextCurrentTrackLiked = (prevCurrentTracks[eventTrack.id] || {}).liked || false;
          const nextCurrentTrack = { ...eventTrack, liked: nextCurrentTrackLiked };
          nextCurrentTrackIds.push(eventTrack.id);
          return { ...nextCurrentTracksOthers, [eventTrack.id]: nextCurrentTrack };
        },
        {}
      );
      setTracksIds(nextCurrentTrackIds);
      return nextCurrentTracks;
    });

    resetCurrentTrack();
  }, [eventTracks, eventTracksLiked]);

  const currentTrack = tracks[tracksIds[currentTrackIndex]] || {};

  const stepBackwardCurrentTrack = () => {
    playTrack(currentTrackIndex - 1 < 0 ? tracksIds.length - 1 : currentTrackIndex - 1);
  };

  const stepForwardCurrentTrack = React.useCallback(() => {
    playTrack(currentTrackIndex + 1 >= tracksIds.length ? 0 : currentTrackIndex + 1);
  }, [playTrack, currentTrackIndex, tracksIds]);

  const updateTrackLiked = (trackIndex, trackRemoved, trackLiked) => {
    setTracks((prevCurrentTracks) => {
      let nextCurrentTrack;
      if (!trackRemoved) {
        nextCurrentTrack = {
          ...prevCurrentTracks[tracksIds[trackIndex]],
          liked: trackLiked,
        };
      }

      return {
        ...prevCurrentTracks,
        [tracksIds[trackIndex]]: nextCurrentTrack,
      };
    });
  };

  const addTrackToLiked = (trackIndex) => {
    tracksLikedRef.current += 1;
    if (tracksLikedRef.current === 1) {
      setEventTracksLikable(true);
    }
    updateTrackLiked(trackIndex, false, true);
  };

  const removeTrackToLiked = (trackIndex) => {
    tracksLikedRef.current -= 1;
    if (!tracksLikedRef.current) {
      tracksLikedRef.current = 0;
      setEventTracksLikable(false);
    }
    if (!eventTracksLiked) {
      updateTrackLiked(trackIndex, false, false);
    } else {
      const nextTracksIds = [
        // eslint-disable-line
        ...tracksIds.slice(0, trackIndex),
        ...tracksIds.slice(trackIndex + 1),
      ];
      updateTrackLiked(trackIndex, true);
      if (!_.isEmpty(nextTracksIds)) {
        setTracksIds(nextTracksIds);
        if (currentTrackIndex === trackIndex) {
          if (currentTrackPlayed) {
            playTrack(currentTrackIndex >= nextTracksIds.length ? 0 : currentTrackIndex);
          } else {
            setCurrentTrackIndex(currentTrackIndex >= nextTracksIds.length ? 0 : currentTrackIndex);
          }
        } else if (currentTrackIndex > trackIndex) {
          setCurrentTrackIndex(currentTrackIndex - 1 < 0 ? nextTracksIds.length - 1 : currentTrackIndex - 1);
        }
      } else {
        setEventTracksLiked(false);
      }
    }
  };

  const getCurrentTrackData = () => {
    setCurrentTrackDuration(audioRef.current.duration);
    setCurrentTrackTime(audioRef.current.currentTime);
  };

  const getCurrentTrackTime = () => {
    setCurrentTrackTime(audioRef.current.currentTime);
  };

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

  return (
    <PlayerContainer>
      <PlayerHeader
        currentTrackName={currentTrack.name || ""}
        currentTrackArtists={currentTrack.artists || []}
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
        {_.map(tracksIds, (trackId, trackIndex) => {
          const { name: trackName, artists: trackArtists, liked: trackLiked } = tracks[tracksIds[trackIndex]] || {};
          return (
            <PlayerListItem
              key={trackId}
              currentTrackIndex={currentTrackIndex}
              currentTrackPlayed={currentTrackPlayed}
              trackIndex={trackIndex}
              trackName={trackName}
              trackArtists={trackArtists}
              trackLiked={trackLiked}
              playTrack={playTrack}
              addTrackToLiked={addTrackToLiked}
              removeTrackToLiked={removeTrackToLiked}
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
  eventTracksLiked: PropTypes.bool.isRequired,
  setEventTracksLiked: PropTypes.func.isRequired,
  setEventTracksLikable: PropTypes.func.isRequired,
};

export default TilePlayer;
