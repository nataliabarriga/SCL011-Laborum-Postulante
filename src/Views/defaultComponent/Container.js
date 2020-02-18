import React from 'react';
import './Container.css';
import ProfileOne from '../ProfileOne';

const Container = () => {
  return (
    <div className="col-8 container">
      <div>
        <p>OFERTAS LABORALES</p>
        <ProfileOne />
      </div>
    </div>
  );
};

export default Container;
