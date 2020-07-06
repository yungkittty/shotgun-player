import React from "react";
import PropTypes from "prop-types";
import { faStepBackward, faStepForward } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import momentDurationFormatSetup from "moment-duration-format"; // eslint-disable-line
import styled from "styled-components";
import Container from "../../../../../../../../../../components/container";
import Text from "../../../../../../../../../../components/text";
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

const ControlsText = styled(Text)`
  margin-left: 10px;
`;

const HeaderControls = ({
  currentTrackDuration,
  currentTrackTime,
  stepBackwardCurrentTrack,
  stepForwardCurrentTrack,
  setAudioTime,
}) => {
  const currentTrackTimeDelta = currentTrackDuration - currentTrackTime;
  return (
    <ControlsContainer>
      <ControlsIconButton
        // eslint-disable-line
        icon={faStepBackward}
        style={{ marginRight: 10 }}
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
        style={{ marginLeft: 10 }}
        onClick={stepForwardCurrentTrack}
      />
      <ControlsText size={10}>
        {/* eslint-disable-line */}
        {`-${moment.duration(currentTrackTimeDelta, "seconds").format("mm:ss", { trim: false })}`}
      </ControlsText>
    </ControlsContainer>
  );
};

HeaderControls.propTypes = {
  currentTrackDuration: PropTypes.number.isRequired,
  currentTrackTime: PropTypes.number.isRequired,
  stepBackwardCurrentTrack: PropTypes.func.isRequired,
  stepForwardCurrentTrack: PropTypes.func.isRequired,
  setAudioTime: PropTypes.func.isRequired,
};

export default HeaderControls;
