import React from "react";
import styled from "styled-components";
import Container from "../../components/container";
import Text from "../../components/text";
import Button from "../../components/button";

const SignInContainer = styled(Container)`
  margin: auto;
`;

const SignInText = styled(Text)`
  margin-bottom: 20px;
`;

const SignInButton = styled(Button)`
  width: 500px;
  height: 50px;
  background-color: #1db954;
`;

const SignIn = () => {
  const onButtonClick = () => {
    // eslint-disable-next-line
    window.location.href = `${process.env.REACT_APP_API_URL}/auth/connect`;
  };

  return (
    <SignInContainer>
      <Text size={24} weight={700} color="white">
        {/* eslint-disable-line */}
        Sign In
      </Text>
      <SignInText color="grey">
        {/* eslint-disable-line */}
        Discover the event line up and more!
      </SignInText>
      <SignInButton onClick={onButtonClick}>
        <Text size={18} weight={700}>
          {/* eslint-disable-line */}
          Continue with Spotify
        </Text>
      </SignInButton>
    </SignInContainer>
  );
};

export default SignIn;
