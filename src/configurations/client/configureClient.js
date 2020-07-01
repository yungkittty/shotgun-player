import ApolloClient from "apollo-boost";

// https://medium.com/@dtkatz/3-ways-to-fix-the-cors-error-and-how-access-control-allow-origin-works-d97d55946d9

const API_PROXY_URL = "https://cors-anywhere.herokuapp.com/";

const API_URL = "https://spotify-api-graphql-console.herokuapp.com/graphql";

const configureClient = () =>
  new ApolloClient({
    uri: `${API_PROXY_URL}${API_URL}`,
  });

export default configureClient;
