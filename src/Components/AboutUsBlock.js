import React from "react";

export const AboutUsBlock = props => {
  return (
    <div id='about-us-block' className='col-sm-6 col-md-4 col-lg-4'>
      <section>
        <img src={props.src} alt='404'/>
        <h4>{props.title}</h4>
        <p>{props.paragraph}</p>
        <p className="learn-more">Learn more</p>
      </section>
    </div>
  );
};
