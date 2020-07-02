import { gql } from "apollo-boost";

const currentUserQueries = {
  GET_CURRENT_USER: gql`
    {
      me {
        id
      }
    }
  `,
};

export default currentUserQueries;
