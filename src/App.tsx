import { createContext, useState } from "react";
import "./styles/main.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "./components/NavBar";
import MainContainer from "./components/MainContainer";
import ShopContainer from "./components/ShopContainer";
import { translations } from "./utils/translations";
import AboutUsContainer from "./components/AboutUsContainer";
import ContactsContainer from "./components/ContactsContainer";

export interface TranslationModel {
  [key: string]: any;
}

export const langContext = createContext({} as TranslationModel);

function App() {
  const [language, setLanguage] = useState<string>("en");

  return (
    <div className="main-container container-fade-in">
      <div className="flex-row lang-options">
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
        <div
          className="flex-row"
          style={{ justifyContent: "center", marginTop: "5px", marginBottom: "5px" }}
        >
          <p style={{ color: "black", fontSize: "10px", fontWeight: "500" }}>
            © MIATA LINGERIE, {new Date().getFullYear()}
          </p>
        </div>
      </langContext.Provider>
    </div>
  );
}

export default App;
