import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";
import { faVolumeUp, faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import styled from "styled-components";
import Container from "../../../../../../../../components/container";
import Button from "../../../../../../../../components/button";
import Icon from "../../../../../../../../components/icon";
import IconButton from "../../../../../../../../components/icon-button";
import Text from "../../../../../../../../components/text";

const ItemContainer = styled(Button)`
  display: flex;
  flex-shrink: 0;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  border-radius: unset;
  background-color: rgba(255, 255, 255, 0.05);

  // This isn't following the default behavior!

  &:hover {
    background-color: rgba(255, 255, 255, 0.175);
  }
`;

const ItemMarginContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 100%;
`;

const ItemBodyContainer = styled(Container)`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  min-width: 0px;
  height: 100%;
  padding-left: 10px;
`;

const ItemText = styled(Text)`
  white-space: nowrap;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const PlayerListItem = ({
  currentTrackIndex,
  currentTrackPlayed,
  trackIndex,
  trackName,
  trackArtists,
  trackLiked,
  playTrack,
  addTrackToLiked,
  removeTrackToLiked,
}) => {
  // This should be memorized!

  const trackArtistsNames = _.map(trackArtists, (trackArtist) => trackArtist.name);

  const playThisTrack = () => playTrack(trackIndex);

  const toggleLikeOfThisTrack = (event) => {
    event.stopPropagation();
    if (!trackLiked) {
      addTrackToLiked(trackIndex);
    } else {
      removeTrackToLiked(trackIndex);
    }
  };

  return (
    <ItemContainer onClick={playThisTrack}>
      <ItemMarginContainer>
        {currentTrackIndex === trackIndex && currentTrackPlayed ? (
          <Icon icon={faVolumeUp} color="#fc0082" />
        ) : (
          <Text size={12} color="grey">
            {/* eslint-disable-line */}
            {`${trackIndex + 1}.`}
          </Text>
        )}
      </ItemMarginContainer>
      <ItemBodyContainer>
        <ItemText size={14} weight={700}>
          {/* eslint-disable-line */}
          {trackName}
        </ItemText>
        <ItemText size={12} color="grey">
          {/* eslint-disable-line */}
          {_.join(trackArtistsNames, ", ")}
        </ItemText>
      </ItemBodyContainer>
      <ItemMarginContainer>
        <IconButton icon={trackLiked ? fasHeart : farHeart} color="#fc0082" onClick={toggleLikeOfThisTrack} />
      </ItemMarginContainer>
    </ItemContainer>
  );
};

PlayerListItem.propTypes = {
  currentTrackIndex: PropTypes.number.isRequired,
  currentTrackPlayed: PropTypes.bool.isRequired,
  trackIndex: PropTypes.number.isRequired,
  trackName: PropTypes.string.isRequired,
  trackArtists: PropTypes.array.isRequired, // eslint-disable-line
  trackLiked: PropTypes.bool.isRequired,
  playTrack: PropTypes.func.isRequired,
  addTrackToLiked: PropTypes.func.isRequired,
  removeTrackToLiked: PropTypes.func.isRequired,
};

export default PlayerListItem;
