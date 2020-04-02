import React from "react";
import { BannerBlock } from "./MainBanner_Block";
import Earn from "../../src/img/table-banner/01.Earn.png";
import Ride from "../../src/img/table-banner/02.Ride.png";
import Eat from "../../src/img/table-banner/03.Eat.png";
import Freight from "../../src/img/table-banner/04.Freight.png";
import Business from "../../src/img/table-banner/05.Business.png";
import Transit from "../../src/img/table-banner/06.Transit.png";
import Bike from "../../src/img/table-banner/07.Bike.png";
import Fly from "../../src/img/table-banner/08.Fly.png";
import BackGround from "../../src/img/table-banner/BackGround.png";


export const Banner = props => {
  // const myArray =[Earn,Ride,Eat,Freight,Business,Transit,Bike,Fly]
  return (
    <div id='banner'>
      <img src={BackGround} className="banner-bg" alt="bg"/>
      <section className="table-nav">
          <BannerBlock address={Earn}/>
          <BannerBlock address={Ride}/>
          <BannerBlock address={Eat}/>
          <BannerBlock address={Freight}/>
          <BannerBlock address={Business}/>
          <BannerBlock address={Transit}/>
          <BannerBlock address={Bike}/>
          <BannerBlock address={Fly}/>
      </section>

      <section className="table-display">
      </section>

    </div>
  );
};
