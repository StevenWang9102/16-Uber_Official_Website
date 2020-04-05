import React from "react";
import { bannerData } from "../Redux/bannerData"

export const Information = (props) => {
  const renderObject = bannerData[props.currentIndex] || {}
  const renderContent = Object.values(renderObject)[0]

  return (
    <section className='table-display'>
      <h1>
        {(renderContent && renderContent.title) ||
          "Get in the driver's seat and get paid"}
      </h1>
      <p>
        {(renderContent && renderContent.paragraph) ||
          "Drive on the largest network of active riders."}
      </p>
      <button className="pointer">
        {(renderContent && renderContent.input1) || "Sign up to drive"}
      </button>
      {props.tagName === "Ride" ? (
      <button className="pointer">
      {(renderContent && renderContent.input2) || "Sign up to drive"}
        </button>
      ) : null}
      <p className='learn-more pointer'>
        {(renderContent && renderContent.input2) ||
          "Learn more about driving and delivering"}
      </p>
    </section>
  );
};
