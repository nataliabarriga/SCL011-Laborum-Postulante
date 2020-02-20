import React from 'react';
import './Container.css';
import ProfileOne from "../ProfileOne"
//import WorkOffers from '../../Component/workOffers'
import ProfileOne from '../ProfileOne';

const Container = () => {
  return (
    <div className="col-8 container">
      <div>
        /*<WorkOffers/>*/
        <ProfileOne />
      </div>
    </div>
  );
};

export default Container;
