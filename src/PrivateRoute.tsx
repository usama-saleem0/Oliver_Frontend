// PrivateRoute.tsx

import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './Components/Features/store';

interface PrivateRouteProps {
  element: React.ReactNode;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, path }) => {
  const isLoggedIn = useSelector((state: RootState) => state.userDetail.isLoggedIn);

  return isLoggedIn ? <Route path={path} element={element} /> : <Navigate to="/Login" />;
};

export default PrivateRoute;
