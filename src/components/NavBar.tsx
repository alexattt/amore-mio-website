import React, { useContext } from 'react'
import { langContext } from '../App';

const NavBar = () => {
  const translations = useContext(langContext);

  return (
    <div className='flex-row navbar-container'>
      <a href='#main'><img id='logo-img' src='/public/images/logo.png' style={{cursor: "pointer"}}/></a>
      <div className='flex-row' style={{ gap: "45px" }}>
        <a href='#aboutUs'>{translations.navbar['about-us']}</a>
        <a href='#shop'>{translations.navbar['shop']}</a>
        <a href='#contactUs'>{translations.navbar['contacts']}</a>
      </div>
    </div>
  )
}

export default NavBar