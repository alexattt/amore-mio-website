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
  prevArrow: <CustomArrow/>,
  nextArrow: <CustomArrow/>
};

const ShopContainer = ({ language }: { language: string }) => {
  const size = useWindowSize();
  const translations = useContext(langContext);

  return (
    <div
      id='shop'
    >
      <Title title={translations.shopDetails['sideTitle']} />
      <Slider {...settings} slidesToShow={size.width < 1000 ? 1 : 3} lazyLoad="progressive">
        {translations.shopDetails['shopItems'].map((item: ShopItemModel) => {
          return <ShopItem itemData={item} language={language} />
        })}
      </Slider>
    </div>
  )
}

export default memo(ShopContainer)