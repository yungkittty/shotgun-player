import ApolloClient from "apollo-boost";

const configureClient = () =>
  new ApolloClient({ uri: process.env.REACT_APP_API_URL });

export default configureClient;
