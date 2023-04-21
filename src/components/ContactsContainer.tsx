import React, { useContext } from 'react'
import { langContext } from '../App';

const ContactsContainer = () => {
  const translations = useContext(langContext);
  
  return (
    <div id='contactUs' className='flex-column' style={{alignItems: 'center', justifyContent: 'center', gap: "30px"}}>
      <p style={{ fontSize: "18px", fontWeight: 500, letterSpacing: "10px", color: 'white' }}>{translations.socialMediaTitle.toUpperCase()}</p>
      <div className='flex-row' style={{gap: "50px"}}>
        <img style={{width: "50px", cursor: "pointer"}} src='/images/instagram_logo.png'/>
        <img style={{width: "50px", cursor: "pointer"}} src='/images/whatsapp_logo.png'/>
      </div>
    </div>
  )
}

export default ContactsContainer