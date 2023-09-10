import React, { memo, useContext } from 'react'
import { langContext } from '../App';

const NavBar = () => {
  const translations = useContext(langContext);

  return (
    <div className='flex-column navbar-container'>
      <a href='#main'><img id='logo-img' src='/images/miata_logo.jpg' style={{ cursor: "pointer" }} /></a>
      <div className='flex-row navbar-items' style={{ gap: "45px" }}>
        <a href='#shop'>{translations.navbar['shop']}</a>
        <a href='#about-us'>{translations.navbar['about-us']}</a>    
        <a href='#contacts'>{translations.navbar['contacts']}</a>
      </div>
    </div>
  )
}

export default memo(NavBar)