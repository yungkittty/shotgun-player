import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import useCurrentUser from "../use-current-user";

const GET_EVENT = gql`
  query getEvent($id: String!, $userId: String!) {
    playlist(id: $id, userId: $userId) {
      id
      name
      owner {
        id
        display_name
      }
      images {
        url
      }
      description
      tracks {
        track {
          id
        }
      }
    }
  }
`;

const useEvent = (id) => {
  const { id: currentUserId } = useCurrentUser();

  const { loading, error, data } = useQuery(GET_EVENT, {
    variables: { id, userId: currentUserId },
  });

  if (loading || error) {
    return { loading, error };
  }

  // This shouldn't be done that way!

  return { loading, error, ...data.playlist };
};

export default useEvent;
