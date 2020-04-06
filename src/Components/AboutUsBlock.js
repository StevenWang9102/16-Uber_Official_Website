import React from "react";

export const AboutUsBlock = props => {
  return (
    <div id='about-us-block' className='col-sm-6 col-md-6 col-lg-4'>
      <section>
        <img src={props.src} alt=''/>
        <h4>{props.title}</h4>
        <p>{props.paragraph}</p>
        <p className="learn-more pointer">Learn more</p>
      </section>
    </div>
  );
};
