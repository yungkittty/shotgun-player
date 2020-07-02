import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import useCurrentUser from "../../hooks/use-current-user";

const PrivateRoute = ({ children, ...others }) => {
  const { loading, id } = useCurrentUser();

  return (
    <Route
      // eslint-disable-next-line
      {...others}
      render={() => {
        if (loading) return null;

        if (id) return children;

        return <Redirect to="/sign-in" />;
      }}
    />
  );
};

PrivateRoute.propTypes = { children: PropTypes.node.isRequired };

export default PrivateRoute;
