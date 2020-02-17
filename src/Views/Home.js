import React from 'react';
// import { Link } from 'react-router-dom';
import Sidebar from '../Component/defaultComponents/Sidebar';
import Footer from '../Component/defaultComponents/Footer';
import Header from '../Component/defaultComponents/Header';

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
