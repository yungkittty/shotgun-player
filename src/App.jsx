import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router } from "react-router-dom";
import PrivateRoute from "./components/private-route";
import PublicRoute from "./components/public-route";
import Home from "./scenes/home";
import SignIn from "./scenes/sign-in";
import configureClient from "./configurations/client";

const client = configureClient();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <PrivateRoute>
          <Home />
        </PrivateRoute>
        <PublicRoute>
          <SignIn />
        </PublicRoute>
      </Router>
    </ApolloProvider>
  );
};

export default App;
