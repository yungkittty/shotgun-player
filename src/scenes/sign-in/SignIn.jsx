import React from "react";

import styled from "styled-components";

const SignInContainer = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`;

const SignInButton = styled.button`
  width: 100%;
  height: 50px;
`;

const SignIn = () => {
  const onButtonClick = () => {
    // eslint-disable-next-line
    window.location.href = `${process.env.REACT_APP_API_URL}/auth/connect`;
  };

  return (
    <SignInContainer>
      <SignInButton onClick={onButtonClick}>
        {}
        {}
      </SignInButton>
    </SignInContainer>
  );
};

export default SignIn;
