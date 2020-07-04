import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { faPlay, faPause } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Container from "../../../../../../../../components/container";
import Button from "../../../../../../../../components/button";
import Icon from "../../../../../../../../components/icon";
import Text from "../../../../../../../../components/text";
import HeaderControls from "./components/header-controls";

const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 80px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 25px;
  padding-right: 25px;
  background-color: rgba(255, 255, 255, 0.1);
`;

const HeaderButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-right: 25px;
  border-radius: 30px;
  border-style: solid;
  border-color: #fc0082;
  border-width: 1px;
  background-color: unset;
`;

const HeaderBodyContainer = styled(Container)`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0px;
  height: 100%;
`;

// This is done somewhere else too!

const HeaderText = styled(Text)`
  white-space: nowrap;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const PlayerHeader = ({
  currentTrackName,
  currentTrackArtists,
  currentTrackPlayed,
  currentTrackDuration,
  currentTrackTime,
  playCurrentTrack,
  pauseCurrentTrack,
  stepBackwardCurrentTrack,
  stepForwardCurrentTrack,
  setAudioTime,
}) => {
  // This is done somewhere else too! Also, it should be memorized!

  const currentTrackArtistsNames = _.map(currentTrackArtists, (currentTrackArtist) => currentTrackArtist.name);

  const toggleCurrentTrackPlayed = () => {
    if (!currentTrackPlayed) {
      playCurrentTrack();
    } else {
      pauseCurrentTrack();
    }
  };

  return (
    <HeaderContainer>
      <HeaderButton style={{ paddingLeft: !currentTrackPlayed ? 2 : 0 }} onClick={toggleCurrentTrackPlayed}>
        <Icon icon={!currentTrackPlayed ? faPlay : faPause} size={20} color="#fc0082" />
      </HeaderButton>
      <HeaderBodyContainer>
        <HeaderText size={16} weight={700}>
          {/* eslint-disable-line */}
          {currentTrackName}
        </HeaderText>
        <HeaderText size={12}>
          {/* eslint-disable-line */}
          {_.join(currentTrackArtistsNames, ", ")}
        </HeaderText>
        <HeaderControls
          currentTrackDuration={currentTrackDuration}
          currentTrackTime={currentTrackTime}
          stepBackwardCurrentTrack={stepBackwardCurrentTrack}
          stepForwardCurrentTrack={stepForwardCurrentTrack}
          setAudioTime={setAudioTime}
        />
      </HeaderBodyContainer>
    </HeaderContainer>
  );
};

PlayerHeader.propTypes = {
  currentTrackName: PropTypes.string.isRequired,
  currentTrackArtists: PropTypes.array.isRequired, // eslint-disable-line
  currentTrackPlayed: PropTypes.bool.isRequired,
  currentTrackDuration: PropTypes.number.isRequired,
  currentTrackTime: PropTypes.number.isRequired,
  playCurrentTrack: PropTypes.func.isRequired,
  pauseCurrentTrack: PropTypes.func.isRequired,
  stepBackwardCurrentTrack: PropTypes.func.isRequired,
  stepForwardCurrentTrack: PropTypes.func.isRequired,
  setAudioTime: PropTypes.func.isRequired,
};

export default PlayerHeader;
