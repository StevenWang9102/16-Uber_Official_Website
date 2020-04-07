import React from "react";
import Bike from "../../src/img/background/Bikes_2x.jpg";
import Business from "../../src/img/background/Business_2x.jpg";
import Eats from "../../src/img/background/Eats_2x.jpg";
import Fly from "../../src/img/background/Fly_2x.jpg";
import Freight from "../../src/img/background/Freight_2x.jpg";
import Ride from "../../src/img/background/Ride_2x.jpg";
import Transit from "../../src/img/background/Transit_2x.jpg";
import BackGround from "../../src/img/table-banner/BackGround.png";

export const BannerBlock = (props) => {
  const backGroundArray = [ BackGround, Ride,  Eats, Freight,  Business, Transit,  Bike, Fly,];
  
  return (
    <section
      id="banner-block"
      className={props.checked ? "banner_unit_pro" : "banner_unit"}
      onClick={() => {
        props.setCurrentIndex(props.index);
        props.setBackground(backGroundArray[props.index]);
      }}>
      <img src={props.src} alt='' />
      <p className='title'>{props.title}</p>
    </section>
  );
};
