import { useSelector } from "react-redux";
import CVDownloadButton from "./CVDownloadButton";
import htmlLogo from "../assets/icons8-html-5.svg";
import cssLogo from "../assets/icons8-css3.svg";
import javascriptLogo from "../assets/icons8-javascript.svg";
import reactLogo from "../assets/icons8-react-native.svg";
import reduxLogo from "../assets/icons8-redux.svg";
import expressLogo from "../assets/expressjs.svg";
import mongoddbLogo from "../assets/mongodb-leaf.svg";
import nextLogo from "../assets/nextjs-icon-svgrepo-com.svg";
import tailwindLogo from "../assets/icons8-tailwindcss.svg";
import photoshopLogo from "../assets/icons8-adobe-photoshop.svg";
import illustratorLogo from "../assets/icons8-adobe-illustrator.svg";
import premiereLogo from "../assets/icons8-adobe-premiere-pro.svg";
import { FaSchool } from "react-icons/fa";
import ShowcasedSkill from "./ShowcasedSkill";
import AboutBackgroundItem from "./AboutBackgroundItem";

const About = ({ content }) => {
  const { classIndex } = useSelector((store) => store.navigation);
  return (
    <div
      className={`main-section section sec2 about ${
        classIndex === 1 ? "active" : ""
      }`}
    >
      <div className="main-title">
        <h1>
          {content.h2Beg}
          <span>{content.h2Span}</span>
        </h1>
      </div>
      <div className="about-container">
        <div className="about-left">
          <h4>{content.infoTitle}</h4>
          <p>
            {content.description1}
            <br />
            {content.description2}
          </p>
          <CVDownloadButton />
        </div>
        <div className="about-right">
          {content.showcasedSkills.map((showcasedSkill, index) => {
            return <ShowcasedSkill content={showcasedSkill} key={index} />;
          })}
        </div>
      </div>
      <div className="about-skills">
        <h4 className="skills-title">{content.skillsTitle}</h4>
        <div className="skills-grid">
          <div className="skills-item">
            <img src={javascriptLogo} alt="JavaScript logo" />
            <p>JavaScript</p>
          </div>
          <div className="skills-item react">
            <img src={reactLogo} alt="React logo" />
            <p>React & React Native</p>
          </div>
          <div className="skills-item">
            <img src={htmlLogo} alt="html 5 logo" />
            <p>HTML 5</p>
          </div>
          <div className="skills-item">
            <img src={cssLogo} alt="css 3 logo" />
            <p>CSS 3</p>
          </div>
          <div className="skills-item redux">
            <img src={reduxLogo} alt="Redux logo" />
            <p>Redux & Redux Toolkit</p>
          </div>
          <div className="skills-item express">
            <img src={expressLogo} alt="Express.js logo" />
            <p>Express.js</p>
          </div>
          <div className="skills-item mongo">
            <img src={mongoddbLogo} alt="MongoDB logo" />
            <p>MongoDB</p>
          </div>
          <div className="skills-item next">
            <img src={nextLogo} alt="Next.js logo" />
            <p>Next.js</p>
          </div>
          <div className="skills-item">
            <img src={tailwindLogo} alt="Tailwind css logo" />
            <p>Tailwind CSS</p>
          </div>
          <div className="skills-item">
            <img src={photoshopLogo} alt="Tailwind css logo" />
            <p>Photoshop</p>
          </div>
          <div className="skills-item">
            <img src={illustratorLogo} alt="Tailwind css logo" />
            <p>Illustrator</p>
          </div>
          <div className="skills-item">
            <img src={premiereLogo} alt="Tailwind css logo" />
            <p>Premiere Pro</p>
          </div>
        </div>
      </div>
      <div className="timeline">
        <h4 className="skills-title">{content.timelineTitle}</h4>
        <div className="timeline-grid">
          {content.timelineItems.map((timelineItem, index) => {
            return (
              <AboutBackgroundItem
                key={index}
                content={timelineItem}
                icon={<FaSchool className="tl-icon" />}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default About;
