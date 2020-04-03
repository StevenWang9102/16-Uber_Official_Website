import React from "react";
import modalities from "../img/modalities2.png";


export const Motion = props => {
  return (
    <div id='motion'>
      <img src={modalities} alt='404'/>
      <div className='container'>
        <div className='row'>
          <div className='test col-sm-12 col-md-9 col-lg-6'>
            <h1>Setting 900+ cities in motion</h1>
            <p className='view-all-city'>View all cities</p>
          </div>
        </div>
      </div>
    </div>
  );
};
