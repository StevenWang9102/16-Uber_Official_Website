import React from "react";

export const BannerBlock = (props) => {
  return (
    <div
      className={props.checked ? "banner_unit_pro" : "banner_unit"}
      onClick={() => {
        props.setCurrentIndex(props.index);
      }}>
      <img src={props.src} alt='404' />
      <p className='title'>{props.title}</p>
    </div>
  );
};
