import React, { useContext } from 'react'
import { langContext } from '../App';

const NavBar = () => {
  const translations = useContext(langContext);

  return (
    <div className='flex-row navbar-container'>
      <img id='logo-img' src='/public/images/logo.png' />
      <div className='flex-row' style={{ gap: "45px" }}>
        <a>{translations.navbar['about-us']}</a>
        <a>{translations.navbar['shop']}</a>
        <a>{translations.navbar['contacts']}</a>
      </div>
    </div>
  )
}

export default NavBar