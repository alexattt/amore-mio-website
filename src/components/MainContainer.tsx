import React, { useContext } from 'react'
import Carousel from 'react-multi-carousel';
import { langContext } from '../App';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const MainContainer = () => {
  const translations = useContext(langContext);

  return (
    <div className='main-page-container'>
      <div className='main-info-container'>
        <div className='flex-column' style={{ height: "100%", justifyContent: "center", alignItems: 'center', gap: "20px" }}>
          <h2 className='h2-title'>{translations.mainPage['title']}</h2>
          <h3 className='h3-title'>{translations.mainPage['order-info']}</h3>
          <h3 className='h3-title'>{translations.mainPage['catchphrase']}</h3>
        </div>
      </div>
      <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={3000} arrows={false} draggable={false} shouldResetAutoplay={true} rewindWithAnimation={true} infinite={true}>
        <img id='main-page-img' src="/images/mock_img.png" alt="" />
        <img id='main-page-img' src="/images/mock_img2.png" alt="" />
        <img id='main-page-img' src="/images/mock_img3.png" alt="" />
        <img id='main-page-img' src="/images/mock_img.png" alt="" />
        <img id='main-page-img' src="/images/mock_img2.png" alt="" />
        <img id='main-page-img' src="/images/mock_img3.png" alt="" />
      </Carousel>
    </div>
  )
}

export default MainContainer