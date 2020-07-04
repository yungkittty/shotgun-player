import React from "react";
import PropTypes from "prop-types";
import { faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import Container from "../../../../../../../../../../components/container";
import IconButton from "../../../../../../../../../../components/icon-button";
import ControlsSeekBar from "./components/controls-seek-bar";

const ControlsContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`;

const ControlsIconButton = (props) => (
  <IconButton
    // eslint-disable-next-line
    {...props}
    size={10}
    color="#fc0082"
  />
);

const HeaderControls = ({
  currentTrackDuration,
  currentTrackTime,
  stepBackwardCurrentTrack,
  stepForwardCurrentTrack,
  setAudioTime,
}) => (
  <ControlsContainer>
    <ControlsIconButton
      // eslint-disable-line
      icon={faStepBackward}
      style={{ marginRight: 5 }}
      onClick={stepBackwardCurrentTrack}
    />
    <ControlsSeekBar
      // eslint-disable-line
      currentTrackDuration={currentTrackDuration}
      currentTrackTime={currentTrackTime}
      setAudioTime={setAudioTime}
    />
    <ControlsIconButton
      // eslint-disable-line
      icon={faStepForward}
      style={{ marginLeft: 8 }}
      onClick={stepForwardCurrentTrack}
    />
  </ControlsContainer>
);

HeaderControls.propTypes = {
  currentTrackDuration: PropTypes.number.isRequired,
  currentTrackTime: PropTypes.number.isRequired,
  stepBackwardCurrentTrack: PropTypes.func.isRequired,
  stepForwardCurrentTrack: PropTypes.func.isRequired,
  setAudioTime: PropTypes.func.isRequired,
};

export default HeaderControls;
