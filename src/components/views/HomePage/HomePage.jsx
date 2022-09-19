import React from 'react';
import { H1, Image } from './HomePage.styled';
import bg from '../../image/bg.jpg';

const HomePage = () => {
  return (
    <>
      <H1>Nice to see you in Contacts page!</H1>
      <Image src={bg} alt="photo" />
    </>
  );
};

export default HomePage;
