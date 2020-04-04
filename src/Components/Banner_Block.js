import React from "react";
import { bannerData, renderTitle} from "../Redux/bannerData"
// import { useState } from "react";

export const BannerBlock = props => {

  console.log(props.checked);
  
  return (
    <div
      className= {props.checked? "banner_unit_pro": "banner_unit"}
      onClick={() => {
        bannerData[renderTitle[props.index]] = true
        props.setCurrentIndex(props.index)
        props.setCurrentTagName(renderTitle[props.index])
      }}>
      <img src={props.src} alt='404' />
      <p className='title'>{props.title}</p>
    </div>
  );
};
