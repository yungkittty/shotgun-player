import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Container from "../../../../../../../../../../../../components/container";

/* 
  If you want a more stylish bar!

  background: linear-gradient(
    to right,
    rgb(108, 19, 221),
    rgb(253, 48, 154) ${currentTrackPercentage}%,
    grey 0px
  );
*/

const BarContainer = styled(Container)`
  ${({ currentTrackPercentage }) => `
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    height: 6px;
    border-radius: 3px;
    cursor: pointer;
    background: linear-gradient(
      to right,
      white ${currentTrackPercentage}%,
      grey 0px
    );
  `}
`;

const BarDot = styled(Container)`
  ${({ currentTrackPercentage }) => `
    position: relative;
    left: ${currentTrackPercentage - 1}%;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    cursor: grab;
    box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.25);
    background-color: white;
  `}
`;

const ControlsSeekBar = ({ currentTrackDuration, currentTrackTime, setAudioTime }) => {
  const barContainerRef = React.useRef();

  const currentTrackPercentage = (currentTrackTime / currentTrackDuration) * 100;

  const updateAudioTime = (event) => {
    // eslint-disable-next-line
    const barContainerX = barContainerRef.current.getBoundingClientRect().left + window.scrollX;
    const barContainerWidth = barContainerRef.current.offsetWidth;
    const clickX = event.pageX;
    const clickDeltaX = clickX - barContainerX;
    const timePerPx = currentTrackDuration / barContainerWidth;
    const time = timePerPx * clickDeltaX;
    setAudioTime(time);
  };

  const clickAudioTime = (event) => {
    updateAudioTime(event);

    /* eslint-disable */

    document.addEventListener("mousemove", updateAudioTime);
    document.addEventListener("mouseup", () => document.removeEventListener("mousemove", updateAudioTime));

    /* eslint-enable */
  };

  return (
    <BarContainer ref={barContainerRef} currentTrackPercentage={currentTrackPercentage} onMouseDown={clickAudioTime}>
      <BarDot currentTrackPercentage={currentTrackPercentage} />
    </BarContainer>
  );
};

ControlsSeekBar.propTypes = {
  currentTrackDuration: PropTypes.number.isRequired,
  currentTrackTime: PropTypes.number.isRequired,
  setAudioTime: PropTypes.func.isRequired,
};

export default ControlsSeekBar;
