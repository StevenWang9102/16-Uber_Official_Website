import React from "react";
import arrow from "../img/sign/arrow.png"

export const SignUpBlock = (props) => {
  return (
    <div id='sign-up-block' className='col-sm-9 col-md-6 col-lg-6'>
      <h1 className="pointer">
        {props.title}
        <span><img src={arrow} alt=""/></span>
      </h1>
    </div>
  );
};
