import React, { memo, useContext } from 'react'
import { langContext } from '../App';
import Slider from "react-slick";
import { useWindowSize } from '../utils/helpers';

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  arrows: false
};

const MainContainer = () => {
  const size = useWindowSize();
  const translations = useContext(langContext);

  return (
    <div id='main' className='main-page-container'>
      <div className='main-info-container'>
        <div className='flex-column' style={{ height: "100%", justifyContent: "center", alignItems: 'center', gap: "20px" }}>
          <h2 className='h2-title'>{translations.mainPage['title']}</h2>
          <h3 className='h3-title'>{translations.mainPage['order-info']}</h3>
          <h3 className='h3-title'>{translations.mainPage['catchphrase']}</h3>
        </div>
      </div>
      <Slider {...settings} slidesToShow={size.width < 1000 ? 1 : 3}>
        <img id='main-page-img' src="/images/main/main_img2.JPG" alt="" />
        <img id='main-page-img' src="/images/main/main_img1.jpg" alt="" />
        <img id='main-page-img' src="/images/main/main_img4.JPG" alt="" />
        <img id='main-page-img' src="/images/main/main_img8.JPG" alt="" />
        <img id='main-page-img' src="/images/main/main_img6.JPG" alt="" />
        <img id='main-page-img' src="/images/main/main_img7.jpeg" alt="" />
        <img id='main-page-img' src="/images/main/main_img3.JPG" alt="" />
      </Slider>
    </div>
  )
}

export default memo(MainContainer)