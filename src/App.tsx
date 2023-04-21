import { createContext, useState } from 'react'
import "./styles/main.css"
import 'react-multi-carousel/lib/styles.css';
import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';
import ShopContainer from './components/ShopContainer';
import { translations } from './translations';
import AboutUsContainer from './components/AboutUsContainer';
import ContactsContainer from './components/ContactsContainer';

export interface TranslationModel {
  [key: string]: any;
}

export const langContext = createContext({} as TranslationModel);

function App() {
  const [language, setLanguage] = useState<string>("en");

  // TODO:
  // fix problem with shop grid, should decently display three items if possible, should be responsive, now problem with item details
  // fix hero page pink overlay positioning (it is over order form)
  // reduce main page letter size
  // fix issue with image height not being same for wider screens. perhaps should crop all images beforehand
  // mobile/tablet view should look good/will test
  // change id aboutUs to about-us, contact-us to contacts

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
        <AboutUsContainer />
        <ContactsContainer />
      </langContext.Provider>
    </div>
  )
}

export default App
