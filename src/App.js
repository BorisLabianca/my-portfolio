import "./App.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaQuestion,
  FaHome,
  FaUser,
  FaBriefcase,
} from "react-icons/fa";
import NavButton from "./components/NavButton";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import AboutThisSite from "./components/AboutThisSite";
import Contact from "./components/Contact";
import { useState } from "react";

function App() {
  const buttonsArray = [
    { faType: <FaHome className="icon" /> },
    { faType: <FaUser className="icon" /> },
    { faType: <FaBriefcase className="icon" /> },
    { faType: <FaQuestion className="icon" /> },
    { faType: <FaEnvelope className="icon" /> },
  ];
  const [btnClass, setBtnClass] = useState([
    "control control-1 active-btn",
    "control control-2",
    "control control-3",
    "control control-4",
    "control control-5",
  ]);
  const [activeSection, setActiveSection] = useState([
    "main-section section sec1 home active",
    "main-section section sec2 about",
    "main-section section sec3 portfolio",
    "main-section section sec4 about-this-site",
    "main-section section sec5 contact",
  ]);
  // const sections = document.querySelectorAll(".section");
  // const sectBtns = document.querySelectorAll(".controls");
  // const sectBtn = document.querySelectorAll(".control");
  // const allSections = document.querySelectorAll(".main-content");
  const pageTransitions = (index) => {
    if (index === 0) {
      const newBtnClass = [
        "control control-1 active-btn",
        "control control-2",
        "control control-3",
        "control control-4",
        "control control-5",
      ];
      setBtnClass(newBtnClass);
      const newActiveSection = [
        "main-section section sec1 home active",
        "main-section section sec2 about",
        "main-section section sec3 portfolio",
        "main-section section sec4 about-this-site",
        "main-section section sec5 contact",
      ];
      setActiveSection(newActiveSection);
    } else if (index === 1) {
      const newBtnClass = [
        "control control-1",
        "control control-2 active-btn",
        "control control-3",
        "control control-4",
        "control control-5",
      ];
      setBtnClass(newBtnClass);
      const newActiveSection = [
        "main-section section sec1 home",
        "main-section section sec2 about active",
        "main-section section sec3 portfolio",
        "main-section section sec4 about-this-site",
        "main-section section sec5 contact",
      ];
      setActiveSection(newActiveSection);
    } else if (index === 2) {
      const newBtnClass = [
        "control control-1",
        "control control-2",
        "control control-3 active-btn",
        "control control-4",
        "control control-5",
      ];
      setBtnClass(newBtnClass);
      const newActiveSection = [
        "main-section section sec1 home",
        "main-section section sec2 about",
        "main-section section sec3 portfolio active",
        "main-section section sec4 about-this-site",
        "main-section section sec5 contact",
      ];
      setActiveSection(newActiveSection);
    } else if (index === 3) {
      const newBtnClass = [
        "control control-1",
        "control control-2",
        "control control-3",
        "control control-4 active-btn",
        "control control-5",
      ];
      setBtnClass(newBtnClass);
      const newActiveSection = [
        "main-section section sec1 home",
        "main-section section sec2 about",
        "main-section section sec3 portfolio",
        "main-section section sec4 about-this-site active",
        "main-section section sec5 contact",
      ];
      setActiveSection(newActiveSection);
    } else if (index === 4) {
      const newBtnClass = [
        "control control-1",
        "control control-2",
        "control control-3",
        "control control-4",
        "control control-5 active-btn",
      ];
      setBtnClass(newBtnClass);
      const newActiveSection = [
        "main-section section sec1 home",
        "main-section section sec2 about",
        "main-section section sec3 portfolio",
        "main-section section sec4 about-this-site",
        "main-section section sec5 contact active",
      ];
      setActiveSection(newActiveSection);
    }
  };

  return (
    <div className="App main-content">
      {/* <Header /> */}
      <main>
        <Home activeSection={activeSection} />
        <About activeSection={activeSection} />
        <Portfolio activeSection={activeSection} />
        <AboutThisSite activeSection={activeSection} />
        <Contact activeSection={activeSection} />
      </main>
      {/* <div className="controls">
        <div
          className={btnClass[0]}
          onClick={() => {
            pageTransitions(0);
          }}
        >
          <FaHome className="icon" />
        </div>
        <div
          className={btnClass[1]}
          onClick={() => {
            pageTransitions(1);
          }}
        >
          <FaUser className="icon" />
        </div>
        <div
          className={btnClass[2]}
          onClick={() => {
            pageTransitions(2);
          }}
        >
          <FaBriefcase className="icon" />
        </div>
        <div
          className={btnClass[3]}
          onClick={() => {
            pageTransitions(3);
          }}
        >
          <FaQuestion className="icon" />
        </div>
        <div
          className={btnClass[4]}
          onClick={() => {
            pageTransitions(4);
          }}
        >
          <FaEnvelope className="icon" />
        </div>
      </div> */}
      <div className="controls">
        {buttonsArray.map((elem, index) => {
          return (
            <NavButton
              icon={elem.faType}
              key={index}
              btnClass={btnClass}
              index={index}
              pageTransitions={pageTransitions}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
