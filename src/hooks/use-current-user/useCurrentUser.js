import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const GET_CURRENT_USER = gql`
  {
    me {
      id
    }
  }
`;

// This doesn't work when session is expired!

const useCurrentUser = () => {
  const { loading, error, data } = useQuery(GET_CURRENT_USER);

  if (loading || error) {
    return { loading, error };
  }

  // This shouldn't be done that way!

  return { loading, error, ...data.me };
};

export default useCurrentUser;
