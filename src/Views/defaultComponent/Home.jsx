import React from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Container from './Container';


const Home = () => {
  return (
    <div className="col-12">
      <Header />
      <Sidebar />
      <Container />
      <Footer />
    </div>
  );
};

export default Home;
