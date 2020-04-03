import React from "react";
import screen from "../img/safety-screen.png";

export const Safety = props => {
  return (
    <div id='safety'>
      <div className='container'>
        <div className='row'>
          <div className='first-column col-sm-12 col-md-6 col-lg-6'>
            <h1>Our commitment to your safety</h1>
            <article>
              <p className='paragraph'>
                With every safety feature we add and every standard in our
                Community Guidelines we uphold, we're committed to working to
                create a safe environment for our users.
              </p>
              <p className='paragraph'>
                Learn more about our Community Guidelines
              </p>
              <p className='paragraph'>See all safety features</p>
              </article>
          </div>

          <div className='second-column col-sm-12 col-md-6 col-lg-6'>
            <img className='safe-img' src={screen} alt='404'/>
          </div>
        </div>
      </div>
    </div>
  );
};
