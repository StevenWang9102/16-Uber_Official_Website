import React from "react";

export const Information = (props) => {
  console.log(props.content);
  
  return (
    <section className='table-display'>
      <h1>
        {(props.content && props.content.title) ||
          "Get in the driver's seat and get paid"}{" "}
      </h1>
      <p>
        {(props.content && props.content.paragraph) ||
          "Drive on the largest network of active riders."}
      </p>
      <button className="pointer">
        {(props.content && props.content.input1) || "Sign up to drive"}
      </button>
      {props.tagName === "Ride" ? (
      <button className="pointer">
      {(props.content && props.content.input2) || "Sign up to drive"}
        </button>
      ) : null}
      <p className='learn-more pointer'>
        {(props.content && props.content.input2) ||
          "Learn more about driving and delivering"}
      </p>
    </section>
  );
};
