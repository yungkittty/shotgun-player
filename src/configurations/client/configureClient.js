import ApolloClient from "apollo-boost";

const configureClient = () => {
  const redirectToSignIn = ({ graphQLErrors }) => {
    if (graphQLErrors && graphQLErrors[0] && graphQLErrors[0].message === "Unauthorized") {
      // eslint-disable-next-line
      window.location.href = `${process.env.REACT_APP_API_URL}/auth/logout`;
    }
  };

  return new ApolloClient({
    uri: `${process.env.REACT_APP_API_URL}/graphql`,
    credentials: "include",
    onError: redirectToSignIn,
  });
};

export default configureClient;
