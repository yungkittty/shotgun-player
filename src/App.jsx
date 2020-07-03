import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import AppContainer from "./components/app-container";
import PrivateRoute from "./components/private-route";
import PublicRoute from "./components/public-route";
import Home from "./scenes/home";
import SignIn from "./scenes/sign-in";
import configureClient from "./configurations/client";

const client = configureClient();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppContainer>
        <Router>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <PublicRoute path="/sign-in">
            <SignIn />
          </PublicRoute>
          <Redirect to="/" />
        </Router>
      </AppContainer>
    </ApolloProvider>
  );
};

export default App;
