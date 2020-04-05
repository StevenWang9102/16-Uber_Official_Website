import React from "react";
import { useState } from "react";
import { BannerBlock } from "../Components/Banner_Block";
import { Information } from "../Components/Information";
import Earn from "../../src/img/table-banner/01.Earn.svg";
import Ride from "../../src/img/table-banner/06.Transit.svg";
import Eat from "../../src/img/table-banner/03.Eat.svg";
import Freight from "../../src/img/table-banner/04.Freight.svg";
import Business from "../../src/img/table-banner/05.Business.svg";
import Transit from "../../src/img/table-banner/06.Transit.svg";
import Bike from "../../src/img/table-banner/07.Bike2.svg";
import Fly from "../../src/img/table-banner/08.Fly.svg";
import BackGround from "../../src/img/table-banner/BackGround.png";
import { bannerData, renderTitle} from "../Redux/bannerData"

export const Banner = props => {
  // 抓住目前的index
  // 抓住目前的tagname
  // 根据index, 切换显示内容
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [currentTagName, setCurrentTagName] = useState("");
  const renderArray = [Earn, Ride, Eat, Freight, Business, Transit, Bike, Fly];
  return (
    <div id='banner'>
      <img src={BackGround} className='banner-background' alt='bg' />
      <section className='banner-table-container'>
        {renderArray.map((element, index) => {
          return (
            <BannerBlock
              src={element}
              index={index}
              currentIndex = {currentIndex}
              setCurrentTagName={(index)=>setCurrentTagName(index)}
              setCurrentIndex={(index)=>setCurrentIndex(index)}
              title={renderTitle[index]}
            />
          );
        })}
      </section>

      <Information
        currentIndex={currentIndex}
        tagName = {renderTitle[currentIndex]}
        // content = {bannerData.currentTagName}
      />
    </div>
  );
};


// const mapStateToProps = () => {
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     // onPostCommentsClicked: (slug, myComment) =>
//     //   dispatch(onPostCommentsClicked(slug, myComment))
//   };
// };

// export const Banner = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(InternalBanner);
