import React from "react";
import apple from "../img/footer/apple-store.svg";
import google from "../img/footer/google-pay.svg";

export const HelpCenter = props => {
  return (
    <div id='help'>
      <div className='container'>
        <div className='row'>
          <section className='col-sm-9 col-md-6 col-lg-6 order-md-1 order-lg-1'>
            <h1>Uber</h1>
            <ul>
              <li>Help Center</li>
              <li>English(International)</li>
              <li>Auckland</li>
            </ul>
            <img src={apple} alt='apple' />
            <img src={google} alt='google' />
          </section>
          <section className='col-sm-9 col-md-6 col-lg-3 order-md-3 order-lg-2'>
            <h4>About us</h4>
            <ul>
              <li>Newsroom</li>
              <li>Investor relations</li>
              <li>Global citizenship</li>
              <li>Safety</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </section>
          <section className='col-sm-9 col-md-6 col-lg-3 order-md-2 order-lg-3'>
            <h4>Products</h4>
            <ul>
              <li>Ride</li>
              <li>Drive</li>
              <li>Eat</li>
              <li>Business</li>
              <li>Freight</li>
              <li>Health</li>
              <li>Uber Air</li>
              <li>Uber Works</li>
              <li>Advanced Technologies Group</li>
            </ul>
          </section>
          {/* <hr/>
<h1>di</h1> */}
        </div>
      </div>
    </div>
  );
};
