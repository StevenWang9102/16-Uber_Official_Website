import React from "react";
import { bannerData } from "../Redux/bannerData";
import message from "../../src/img/information/message.png";

export const Information = (props) => {
  const renderObject = bannerData[props.currentIndex];
  const renderContent = Object.values(renderObject)[0];

  return (
    <section id='information'>
      {renderContent && (
        <div>
          <h1>{renderContent.title}</h1>
          <p>{renderContent.paragraph}</p>

          {props.currentIndex === 1 && (
            <div className="input-container">
              <input placeholder='Enter pick location'/>
              <img src={message} alt=''/>
              <input placeholder='Enter destination' />
            </div>
          )}

          <button className='pointer sign-to-drive'>
            {renderContent.input1}
          </button>

          {props.currentIndex === 0 && (
            <p className='learn-more pointer'>{renderContent.input2}</p>
          )}

          {props.currentIndex === 1 && (
            <button className='pointer schedule-later'>
              Schedule for later
            </button>
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
