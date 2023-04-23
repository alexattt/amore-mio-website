import React, { useContext } from 'react'
import { langContext } from '../App';

const ContactsContainer = () => {
  const translations = useContext(langContext);

  return (
    <div id='contacts' className='flex-column' style={{ alignItems: 'center', justifyContent: 'center', gap: "30px" }}>
      <p className='horizontal-title'>{translations.socialMediaTitle.toUpperCase()}</p>
      <div className='flex-row' style={{ gap: "50px" }}>
        <a href='https://www.instagram.com/amoremio.lv' target='_blank'><img className='social-media-icon' src='/images/instagram_logo.png' /></a>
        <a href='https://wa.me/+37129972912' target='_blank'><img className='social-media-icon' src='/images/whatsapp_logo.png' /></a>
      </div>
    </div>
  )
}

export default ContactsContainer