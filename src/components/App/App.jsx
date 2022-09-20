import React, { Suspense, lazy, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import authOperations from 'Redux/auth/auth-operations';
import AppBar from 'components/AppBar/AppBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

import { Route, Routes } from 'react-router-dom';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refresh());
  }, [dispatch]);

  const HomePage = lazy(() => import('../../views/HomePage/HomePage'));
  const LoginPage = lazy(() => import('../../views/LoginPage/LoginPage'));
  const RegisterPage = lazy(() =>
    import('../../views/RegisterPage/RegisterPage')
  );
  const Contacts = lazy(() => import('../../views/Contacts/Contacts'));

  return (
    <>
      <AppBar />
      <Suspense fallback={<div>...Loading...Please wait...</div>}>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
        <Routes>
          <Route element={<PublicRoute restricted />}>
            <Route path="/register" element={<RegisterPage />} />
          </Route>
        </Routes>
        <Routes>
          <Route element={<PublicRoute redirectTo="/contacts restricted" />}>
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Routes>
        <Routes>
          <Route element={<PrivateRoute redirectTo="/login" />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
