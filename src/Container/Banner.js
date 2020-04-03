import React from "react";
import { BannerBlock } from "../Components/Banner_Block";
import { Information } from "../Components/Information";
import Earn from "../../src/img/table-banner/01.Earn.svg";
import Ride from "../../src/img/table-banner/02.Ride.svg";
import Eat from "../../src/img/table-banner/03.Eat.svg";
import Freight from "../../src/img/table-banner/04.Freight.svg";
import Business from "../../src/img/table-banner/05.Business.svg";
import Transit from "../../src/img/table-banner/06.Transit.svg";
import Bike from "../../src/img/table-banner/07.Bike.svg";
import Fly from "../../src/img/table-banner/08.Fly.svg";
import BackGround from "../../src/img/table-banner/BackGround.png";

export const Banner = props => {
  const renderArray = [Earn, Ride, Eat, Freight, Business, Transit, Bike, Fly];
  const renderTitle = ["Earn", "Ride", "Eat", "Freight", "Business", "Transit", "Bike", "Fly"];
  return (
    <div id='banner'>
      <img src={BackGround} className='banner-background' alt='bg' />
      <section className='banner-table-container'>
        {renderArray.map((element, index) => {
          console.log(renderArray);
          return <BannerBlock src={element} title={renderTitle[index]} />;
        })}
      </section>

      <Information />
    </div>
  );
};
