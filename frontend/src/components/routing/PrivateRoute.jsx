import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
  // TODO: Implement authentication check
  const isAuthenticated = false; // This will be managed by auth context

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired
};

export default PrivateRoute; 