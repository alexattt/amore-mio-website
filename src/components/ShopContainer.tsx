import React, { memo, useContext } from 'react'
import { langContext } from '../App';
import { ShopItemModel } from '../models/ShopItemModel';
import Title from './shared-components/Title'
import ShopItem from './ShopItem';
import { useWindowSize } from '../utils/helpers';
import Slider from "react-slick";
import { CustomArrow } from './shared-components/CustomArrow';

const settings = {
  dots: false,
  speed: 1000,
  arrows: true,
  draggable: false,
  centerMode: true,
  centerPadding: "0px",
  initialSlide: 1,
  prevArrow: <CustomArrow/>,
  nextArrow: <CustomArrow/>
};

const ShopContainer = ({ language }: { language: string }) => {
  const size = useWindowSize();
  const translations = useContext(langContext);

  const robes = translations.shopDetails['shopItems'].filter((item: any) => item.id === "robe")
  const pyjamas = translations.shopDetails['shopItems'].filter((item: any) => item.id === "pyjama")

  return (
    <div
      id='shop'
    >
      <Title title={translations.shopDetails['sideTitle']} />
      <Slider {...settings} slidesToShow={size.width < 1000 ? 1 : 3} fade={size.width < 1000 ? true : false}  lazyLoad="progressive">
        {robes.map((item: ShopItemModel) => {
          return <ShopItem itemData={item} language={language} />
        })}
      </Slider>
      <br/>
      <Slider {...settings} slidesToShow={size.width < 1000 ? 1 : 3} fade={size.width < 1000 ? true : false} lazyLoad="progressive">
        {pyjamas.map((item: ShopItemModel) => {
          return <ShopItem itemData={item} language={language} />
        })}
      </Slider>
    </div>
  )
}

export default memo(ShopContainer)