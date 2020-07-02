import { useQuery } from "@apollo/react-hooks";
import { currentUserQueries } from "../../datas/current-user";

const useCurrentUser = () => {
  const { loading, error, data } = useQuery(
    currentUserQueries.GET_CURRENT_USER
  );

  if (loading || error) {
    return { loading, error };
  }

  // This shouldn't be done that way!

  return { loading, error, ...data.me };
};

export default useCurrentUser;
