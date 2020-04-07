import React from "react";

export const AboutUsBlock = (props) => {
  return (
    <section id='about-us-block' className='col-sm-6 col-md-6 col-lg-4'>
      <img src={props.src} alt='' />
      <h4>{props.title}</h4>
      <p>{props.paragraph}</p>
      <p className='learn-more'>Learn more</p>
    </section>
  );
};
