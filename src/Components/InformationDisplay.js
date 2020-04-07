import React from "react";
import { database } from "../Redux/database";
import message from "../../src/img/information/message.png";

export const InformationDisplay = (props) => {
  const renderContent = database[props.currentIndex];

  return (
    <section id='information'>
      {renderContent && (
        <div>
          <h1>{renderContent.title}</h1>
          <p>{renderContent.paragraph}</p>

          {props.currentIndex === 1 && (
            <div className='input-container'>
              <input placeholder='Enter pick location' />
              <img src={message} alt='' />
              <input placeholder='Enter destination' />
            </div>
          )}

          <button className='sign-to-drive pointer'>
            {renderContent.input}
          </button>

          {props.currentIndex === 0 && (
            <p className='learn-more pointer'>
              Learn more about driving and delivering
            </p>
          )}

          {props.currentIndex === 1 && (
            <button className='schedule-later pointer'>
              Schedule for later
            </button>
          )}

          {props.currentIndex === 2 && (
            <p className='learn-more-pro pointer'>
              Own a restaurant? Partner with Uber Eats
            </p>
          )}

          {props.currentIndex === 3 && (
            <p className='sign-to-carrier pointer'>Sign up to be a carrier</p>
          )}
        </div>
      )}
    </section>
  );
};
