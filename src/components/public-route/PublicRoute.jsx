import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import useCurrentUser from "../../hooks/use-current-user";

const PublicRoute = ({ children, ...others }) => {
  const { loading, id } = useCurrentUser();

  return (
    <Route
      // eslint-disable-next-line
      {...others}
      render={() => {
        if (loading) return null;

        if (!id) return children;

        return <Redirect to="/sign-in" />;
      }}
    />
  );
};

PublicRoute.propTypes = { children: PropTypes.node.isRequired };

export default PublicRoute;
