import React from "react";
import { renderTitle} from "../Redux/bannerData"
// import { useState } from "react";

export const BannerBlock = props => {
  
  return (
    <div
      className= {props.checked? "banner_unit_pro": "banner_unit"}
      onClick={() => {
        // alert(props.index)
        props.setCurrentIndex(props.index)
        props.setCurrentTagName(renderTitle[props.index])
      }}>
      <img src={props.src} alt='404' />
      <p className='title'>{props.title}</p>
    </div>
  );
};
