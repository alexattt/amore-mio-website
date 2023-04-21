import React, { useContext } from 'react'
import { langContext } from '../App';
import SideTitle from './shared-components/SideTitle';

const AboutUsContainer = () => {
  const translations = useContext(langContext);
  
  var aboutUs = translations.aboutUs.split(/[\r\n]+/);
  var signature = translations.aboutUsSignature.split(/[\r\n]+/);
  
  return (
    <div id='aboutUs' className='flex-row' style={{ justifyContent: "space-between" }}>
      <div className='flex-column' style={{ alignItems: 'center', justifyContent: 'center' }}>
        <SideTitle title={translations.navbar['about-us']} />
      </div>
      <div className='flex-column' style={{ alignItems: 'center', justifyContent: 'center', maxWidth: '80vw', width: '80vw' }}>
        {aboutUs.map((sentence: string) => {
          return <p style={{width: "70%", lineHeight: "30px", wordBreak: "break-word", textAlign: "justify"}}>{sentence}</p>
        })}
        <br/>
        {signature.map((sentence: string) => {
          return <p style={{width: "70%", lineHeight: "30px", wordBreak: "break-word", textAlign: "justify"}}>{sentence}</p>
        })}
        <br/>
        <br/>
        <div id='keywords' className='flex-row' style={{justifyContent: "space-evenly", width: "100%"}}>
          {translations.keywords.map((keyword: string) => {
            return <p className='keyword'>{keyword}</p>
          })}
        </div>
      </div>
    </div>
  )
}

export default AboutUsContainer