import React from "react";


import { SignUpBlock } from "../Components/SignUpBlock";

export const SignUp = props => {
  return (
    <div id='sign-up'>
      <div className='container'>
        <div className='row'>
          <SignUpBlock title="Sign up to drive"/>
          <SignUpBlock title="Sign up to ride"/>
        </div>
      </div>
    </div>
  );
};
