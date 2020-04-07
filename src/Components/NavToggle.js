import React from "react";
import arrow from "../img/toggle/down-arrow.png";
import earth from "../img/toggle/global.png";

export const NavToggle = (props) => {
  return (
    <section id='nav-toggle'>
      <nav>
        <span>Products</span>
        <span>Company</span>
      </nav>

      <div className='first-container'>
        <li>
          Ride <img src={arrow} alt='' />
        </li>
        <li>
          Drive <img src={arrow} alt='' />
        </li>
        <li>
          Uber Eats <img src={arrow} alt='' />
        </li>
        <li>
          Uber for Business <img src={arrow} alt='' />
        </li>
        <li>
          Freight <img src={arrow} alt='' />
        </li>
      </div>

      <hr />

      <div className='second-container'>
        <li> Safety</li>
        <li> Help</li>
        <li> COVID-19</li>
      </div>

      <hr />

      <div className='third-container'>
        <img src={earth} alt='' /> EN
      </div>
    </section>
  );
};
