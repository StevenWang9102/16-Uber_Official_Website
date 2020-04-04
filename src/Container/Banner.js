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
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [currentTagName, setCurrentTagName] = useState("");
  const renderArray = [Earn, Ride, Eat, Freight, Business, Transit, Bike, Fly];

  console.log(typeof(currentTagName));
  console.log(bannerData[currentTagName]);

  // 这个只是序号
  console.log(currentIndex);
  // 这个是目前的title字符串
  console.log(renderTitle[currentIndex]);

  console.log(renderTitle[currentIndex] && renderTitle[currentIndex].checked);
  // 这个是携带的相关信息
  // 改变对应的check状态
  // renderTitle[currentIndex].checked = true

  console.log(bannerData[renderTitle[currentIndex]]);
  // 其中有一个渲染的时候，使用不同的className


  // 现在得到目前点击的标签序号，那么我点击的标签就是renderTitle[index]
  // 对应的title是？
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
              checked={bannerData[renderTitle[props.index]] && bannerData[renderTitle[props.index]].checked}
              setCurrentIndex={(index)=>setCurrentIndex(index)}
              title={renderTitle[index]}
            />
          );
        })}
      </section>

{/* 这个信息携带对应的内容 */}
      <Information
        tagName = {renderTitle[currentIndex]}
        content = {bannerData.currentTagName}
      />
    </div>
  );
};
