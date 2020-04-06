import React from "react";
import Bike_2x from "../../src/img/background/Bikes_2x.jpg";
import Business_2x from "../../src/img/background/Business_2x.jpg";
import Eats_2x from "../../src/img/background/Eats_2x.jpg";
import Fly_2x from "../../src/img/background/Fly_2x.jpg";
import Freight_2x from "../../src/img/background/Freight_2x.jpg";
import Ride_2x from "../../src/img/background/Ride_2x.jpg";
import Transit_2x from "../../src/img/background/Transit_2x.jpg";
import BackGround from "../../src/img/table-banner/BackGround.png";

export const BannerBlock = (props) => {
  const backGroundArray = [
    BackGround,
    Ride_2x,
    Eats_2x,
    Freight_2x,
    Business_2x,
    Transit_2x,
    Bike_2x,
    Fly_2x,
  ];
  return (
    <div
    id="banner-block"
      className={props.checked? "banner_unit_pro" : "banner_unit"}
      onClick={() => {
          props.setCurrentIndex(props.index);
          props.setBackgroundSource(backGroundArray[props.index]);
      }}>
      <img src={props.src} alt='404' />
      <p className='title'>{props.title}</p>
    </div>
  );
};
