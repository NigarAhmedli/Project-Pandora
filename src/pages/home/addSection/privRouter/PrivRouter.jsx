import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivRouter = () => {
  const user = useSelector(state => state.auth.user); // authSlice-dan istifadəçi məlumatı

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivRouter;
