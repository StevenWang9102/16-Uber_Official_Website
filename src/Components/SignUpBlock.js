import React from "react";
import arrow from "../img/sign/arrow.png";

export const SignUpBlock = (props) => {
  return (
    <section id='sign-up-block' className='col-sm-9 col-md-6 col-lg-6'>
      <h1>
        {props.title}
        <img src={arrow} alt=''/>
      </h1>
    </section>
  );
};
