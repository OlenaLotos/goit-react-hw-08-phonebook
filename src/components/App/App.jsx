import React, { Suspense, lazy, useEffect } from 'react';

// import ContactForm from '../ContactForm/ContactForm';
// import Filter from '../Filter/Filter';
// import ContactList from '../ContactList/ContactList';
// import { Section, TitleH1 } from './App.styled';

import { Route, Routes } from 'react-router-dom';

export function App() {
  const HomePage = lazy(() => import('../views/HomePage/HomePage'));
  const LoginPage = lazy(() => import('../views/LoginPage/LoginPage'));
  const RegisterPage = lazy(() => import('../views/RegisterPage/RegisterPage'));
  const Contacts = lazy(() => import('../views/Contacts/Contacts'));

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

export default App;

{
  /* <Section>
        <TitleH1>Phonebook</TitleH1>
        <ContactForm />
      </Section>
      <Section>
        <TitleH1>Contacts</TitleH1>
        <Filter />
        <ContactList />
      </Section> */
}
