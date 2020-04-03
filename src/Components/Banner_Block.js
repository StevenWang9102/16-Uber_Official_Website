import React from "react";

export const BannerBlock = props => {
    
  return (
    <div className="banner_unit">
        <img src={props.src} alt="404"/>
        <p className="title">{props.title}</p>
    </div>
  )
};
