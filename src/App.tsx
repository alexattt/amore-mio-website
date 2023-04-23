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
  // fix problem with shop grid, should decently display three items in row/six per page (for future)
  // check form on smaller screens, maybe add images on top?

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
        <div className='flex-row' style={{ justifyContent: 'center', marginTop: '5px', marginBottom: '5px' }}>
          <p style={{ color: "rgba(167, 134, 129, 1)", fontSize: "10px", fontWeight: '500' }}>© AMORE MIO BRAND, 2023</p>
        </div>
      </langContext.Provider>
    </div>
  )
}

export default App
