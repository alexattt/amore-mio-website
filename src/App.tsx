import { createContext, useState } from 'react'
import "./styles/main.css"
import 'react-multi-carousel/lib/styles.css';
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';
import ShopContainer from './components/ShopContainer';
import { translations } from './translations';

export interface TranslationModel {
  [key: string]: any;
}

export const langContext = createContext({} as TranslationModel);

function App() {
  const [language, setLanguage] = useState<string>("en");

  // TODO:
  // make success/error dialogs bit more minimalistic (text underline green or red?)
  // translate about us info
  // finalize with social media links (whatsapp or telegram?)
  // fix issue with image height not being same for wider screens. perhaps should crop all images beforehand
  // change item price to number and euro sign add in html
  // mobile/tablet view should look good/will test

  return (
    <div className="main-container">
      <div className='flex-row lang-options'>
        <a onClick={() => setLanguage("lv")}>LV</a>
        <a onClick={() => setLanguage("en")}>EN</a>
        <a onClick={() => setLanguage("ru")}>RU</a>
      </div>
      <langContext.Provider value={translations[language]}>
        <NavBar />
        <MainContainer />
        <ShopContainer language={language} />
      </langContext.Provider>
    </div>
  )
}

export default App
