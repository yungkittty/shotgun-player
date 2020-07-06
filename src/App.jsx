import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import AppContainer from "./components/app-container";
import PrivateRoute from "./components/private-route";
import Home from "./scenes/home";
import SignIn from "./scenes/sign-in";
import configureClient from "./configurations/client";

const client = configureClient();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <AppContainer>
        <Router>
          <Switch>
            <PrivateRoute exact path="/">
              <Home />
            </PrivateRoute>
            <Route exact path="/sign-in">
              <SignIn />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </AppContainer>
    </ApolloProvider>
  );
};

export default App;
