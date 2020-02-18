import React from 'react';
// import { Link } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Container from './Container';


const Home = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <Container />
      <Footer />
    </div>
  );
};

export default Home;
