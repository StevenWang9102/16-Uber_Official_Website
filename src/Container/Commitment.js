import React from "react";
import screen from "../img/safety-screen.png";

export const Commitment = props => {
  return (
    <div id='commitment' className='container'>
        <div className='row'>
          <div className='first-column col-sm-12 col-md-6 col-lg-6'>
            <h1>Our commitment to your safety</h1>
            <article>
              <p>
                With every safety feature we add and every standard in our
                Community Guidelines we uphold, we're committed to working to
                create a safe environment for our users.
              </p>
              <p className='paragraph pointer'>
                Learn more about our Community Guidelines
              </p>
              <p className='paragraph pointer'>See all safety features</p>
              </article>
          </div>

          <div className='second-column col-sm-12 col-md-6 col-lg-6'>
            <img className='safe-img' src={screen} alt=''/>
          </div>
        </div>
      </div>
  );
};
