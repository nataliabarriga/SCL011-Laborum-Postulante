import React from 'react';
// import { Link } from 'react-router-dom';
import Sidebar from './defaultComponents/Sidebar';
import Footer from './defaultComponents/Footer';
import Header from './defaultComponents/Header';

const Home = () => {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="footer-container">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
