import React from 'react';
import './Container.css';
// import ProfileOne from "../ProfileOne"
import WorkOffers from '../../Component/workOffers'
  
const Container = () => {
  return (
    <div className="col-8 container">
      <div>
        {/* <ProfileOne/> */}
        <WorkOffers/>
      </div>
    </div>
  );
};

export default Container;
