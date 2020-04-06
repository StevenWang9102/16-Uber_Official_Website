import React from "react";
import modalities from "../img/modalities2.png";


export const Motion = props => {
  return (
    <div id='motion'>
      <img src={modalities} alt=''/>
      <div className='container'>
        <div className='row'>
          <div className='test col-sm-12 col-md-10 col-lg-12'>
            <h1>Setting 900+ cities in motion</h1>
            <p className='view-all-city pointer'>View all cities</p>
          </div>
        </div>
      </div>
    </div>
  );
};
