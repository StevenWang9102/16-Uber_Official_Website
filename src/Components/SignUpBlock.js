import React from "react";
import arrow from "../img/sign/arrow-right.png";

export const SignUpBlock = (props) => {
  return (
    <section id='sign-up-block' className='col-sm-9 col-md-6 col-lg-6'>
      <h1>
        {props.title}
      </h1>
      <div className="container">
        <div className="block_box1"></div>
        <div className="block_box2"></div>
        <img src={arrow} alt=''/>
      </div>
    </section>
  );
};
