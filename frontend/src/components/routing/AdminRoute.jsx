import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const AdminRoute = ({ children }) => {
  // TODO: Implement authentication and admin role check
  const isAuthenticated = false; // This will be managed by auth context
  const isAdmin = false; // This will be managed by auth context

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!isAdmin) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

AdminRoute.propTypes = {
  children: PropTypes.node.isRequired
};

export default AdminRoute; 