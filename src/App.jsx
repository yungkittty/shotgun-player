import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import Home from "./scenes/home";
import configureClient from "./configurations/client";

const client = configureClient();

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
};

export default App;
