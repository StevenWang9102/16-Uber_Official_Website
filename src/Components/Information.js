import React from "react";
import { useState } from "react";
import { bannerData } from "../Redux/bannerData";

export const Information = (props) => {
  const renderObject = bannerData[props.currentIndex];
  const renderContent = Object.values(renderObject)[0];

  return (
    <section id='information'>
      {renderContent && (
        <div>
          <h1>{renderContent.title}</h1>
          <p>{renderContent.paragraph}</p>
          <button className='pointer sign-to-drive'>
            {renderContent.input1}
          </button>

          {props.currentIndex === 1 && (
            <button className='pointer schedule-later'>
              Schedule for later
            </button>
          )}

          {props.currentIndex !== 1 &&
            props.currentIndex !== 2 &&
            props.currentIndex !== 3 &&
            props.currentIndex !== 4 && 
            props.currentIndex !== 5 && 
            props.currentIndex !== 6 &&
            props.currentIndex !== 7 && (
              <p className='learn-more pointer'>{renderContent.input2}</p>
            )}

          {props.currentIndex === 2 && (
            <p className='learn-more-pro pointer'>{renderContent.input2}</p>
          )}

          {props.currentIndex === 3 && (
            <p className='sign-to-carrier pointer'>{renderContent.input2}</p>
          )}
        </div>
      )}
    </section>
  );
};
