import { useSelector, useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { switchLanguage } from "./features/language/languageSlice";
import { switchTheme } from "./features/theme/themeSlice";
import "./App.css";
import {
  FaEnvelope,
  FaHome,
  FaUser,
  FaBriefcase,
  FaSun,
  FaMoon,
  FaLanguage,
  FaCode,
} from "react-icons/fa";
import NavButton from "./components/NavButton";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import AboutThisSite from "./components/AboutThisSite";
import Contact from "./components/Contact";
import content from "./assets/content.json";

function App() {
  const dispatch = useDispatch();
  const buttonsArray = [
    {
      icon: <FaHome className="icon" />,
      description: { eng: "Home", fr: "Accueil", jap: "ホーム" },
    },
    {
      icon: <FaUser className="icon" />,
      description: { eng: "About me", fr: "Mon profil", jap: "プロフィール" },
    },
    {
      icon: <FaBriefcase className="icon" />,
      description: {
        eng: "My portfolio",
        fr: "Mon portfolio",
        jap: "制作実績",
      },
    },
    {
      icon: <FaCode className="icon" />,
      description: {
        eng: "About this site",
        fr: "A propos du site",
        jap: "サイトに付いて",
      },
    },
    {
      icon: <FaEnvelope className="icon" />,
      description: {
        eng: "Contact me",
        fr: "Me contacter",
        jap: "お問い合せ",
      },
    },
  ];

  const { language } = useSelector((store) => store.language);
  const { theme } = useSelector((store) => store.theme);
  const menuRef = useRef();
  const switchRef = useRef();
  const [menuVisible, setMenuVisible] = useState(false);
  window.addEventListener("click", (event) => {
    if (
      event.target !== menuRef.current &&
      event.target !== switchRef.current
    ) {
      setMenuVisible(false);
    }
  });

  return (
    <div
      className={`App main-content ${theme === "white" ? "light-mode" : ""}`}
    >
      {/* <Header /> */}
      <main>
        <Home
          content={
            language === "eng"
              ? content.eng.home
              : language === "fr"
              ? content.fr.home
              : language === "jap" && content.jap.home
          }
        />
        <About
          content={
            language === "eng"
              ? content.eng.aboutMe
              : language === "fr"
              ? content.fr.aboutMe
              : language === "jap" && content.jap.aboutMe
          }
        />
        <Portfolio
          content={
            language === "eng"
              ? content.eng.myPortfolio
              : language === "fr"
              ? content.fr.myPortfolio
              : language === "jap" && content.jap.myPortfolio
          }
        />
        <AboutThisSite
          content={
            language === "eng"
              ? content.eng.aboutThisSite
              : language === "fr"
              ? content.fr.aboutThisSite
              : language === "jap" && content.jap.aboutThisSite
          }
        />
        <Contact
          content={
            language === "eng"
              ? content.eng.contactMe
              : language === "fr"
              ? content.fr.contactMe
              : language === "jap" && content.jap.contactMe
          }
        />
      </main>
      <div className="controls">
        {buttonsArray.map((elem, index) => {
          return (
            <NavButton
              icon={elem.icon}
              key={index}
              index={index}
              description={elem.description}
            />
          );
        })}
      </div>
      {/* <div className="language-switch">
        <FaLanguage className="icon" />
        <div className="language-switch-hover">
          <div
            className={language === "eng" ? "selected" : "not-selected"}
            onClick={() => {
              dispatch(switchLanguage("eng"));
            }}
          >
            Eng
          </div>
          <div
            className={language === "fr" ? "selected" : "not-selected"}
            onClick={() => {
              dispatch(switchLanguage("fr"));
            }}
          >
            Fr
          </div>
          <div
            className={
              language === "jap" ? "jap-big selected" : "jap-big not-selected"
            }
            onClick={() => {
              dispatch(switchLanguage("jap"));
            }}
          >
            日本語
          </div>
          <div
            className={
              language === "jap"
                ? "jap-small selected"
                : "jap-small not-selected"
            }
            onClick={() => {
              dispatch(switchLanguage("jap"));
            }}
          >
            日
          </div>
        </div>
      </div> */}
      <div
        className="language-switch"
        onClick={() => {
          setMenuVisible(!menuVisible);
        }}
      >
        <div className="switch-cover" ref={switchRef}></div>
        <FaLanguage className="icon" />
        <div
          className={`language-switch-hover ${menuVisible && "menu-visible"}`}
          ref={menuRef}
        >
          <div
            className={language === "eng" ? "selected" : "not-selected"}
            onClick={() => {
              dispatch(switchLanguage("eng"));
            }}
          >
            Eng
          </div>
          <div
            className={language === "fr" ? "selected" : "not-selected"}
            onClick={() => {
              dispatch(switchLanguage("fr"));
            }}
          >
            Fr
          </div>
          <div
            className={
              language === "jap" ? "jap-big selected" : "jap-big not-selected"
            }
            onClick={() => {
              dispatch(switchLanguage("jap"));
            }}
          >
            日本語
          </div>
          <div
            className={
              language === "jap"
                ? "jap-small selected"
                : "jap-small not-selected"
            }
            onClick={() => {
              dispatch(switchLanguage("jap"));
            }}
          >
            日
          </div>
        </div>
      </div>
      <div
        className="theme-switch"
        onClick={() => {
          dispatch(switchTheme());
        }}
      >
        {theme === "black" ? (
          <FaSun className="icon" />
        ) : (
          <FaMoon className="icon" />
        )}
      </div>
    </div>
  );
}

export default App;
