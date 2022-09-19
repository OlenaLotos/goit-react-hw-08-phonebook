import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import authSelectors from 'Redux/auth/auth-selectors';

export default function PrivateRoute({ redirectTo = '/' }) {
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate replace to={redirectTo} />;
}

PrivateRoute.propTypes = {
  redirectTo: PropTypes.string,
};
