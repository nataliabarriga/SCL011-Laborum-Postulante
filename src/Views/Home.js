import React from 'react';
// import { Link } from 'react-router-dom';

import Header from './defaultComponent/Header';
import Sidebar from './defaultComponent/Sidebar';
import Footer from './defaultComponent/Footer';
import ContainerForm from './ContainerForm';


const Home = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <ContainerForm />
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
