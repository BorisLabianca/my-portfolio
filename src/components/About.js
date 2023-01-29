import { useSelector } from "react-redux";
import CVDownloadButton from "./CVDownloadButton";
import htmlLogo from "../assets/icons8-html-5.svg";
import cssLogo from "../assets/icons8-css3.svg";
import javascriptLogo from "../assets/icons8-javascript.svg";
import reactLogo from "../assets/react-icon.svg";
import reduxLogo from "../assets/icons8-redux.svg";
import expressLogo from "../assets/expressjs.svg";
import mongoddbLogo from "../assets/mongodb-leaf.svg";
import nextLogo from "../assets/nextjs-icon-svgrepo-com.svg";
import tailwindLogo from "../assets/icons8-tailwindcss.svg";
import photoshopLogo from "../assets/icons8-adobe-photoshop.svg";
import illustratorLogo from "../assets/icons8-adobe-illustrator.svg";
import premiereLogo from "../assets/icons8-adobe-premiere-pro.svg";
import { FaSchool } from "react-icons/fa";

const About = () => {
  const { classIndex } = useSelector((store) => store.navigation);

  return (
    <div
      className={`main-section section sec2 about ${
        classIndex === 1 ? "active" : ""
      }`}
    >
      <div className="main-title">
        <h2>
          About <span>me</span>
          <span className="big-text">my info</span>
        </h2>
      </div>
      <div className="about-container">
        <div className="about-left">
          <h4>Information about me</h4>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
            quos vel quisquam, laborum fugiat accusamus ipsam, aspernatur autem,
            dicta nisi quaerat molestiae necessitatibus voluptate totam deleniti
            eligendi adipisci magni laboriosam. Facilis beatae, laborum quasi
            dolorum vel a temporibus alias aliquam consequatur sed minima maxime
            nulla sequi placeat, error architecto! Ipsum, adipisci sapiente?
            Similique tempora magnam ullam illo fugiat sequi labore.
          </p>
          <CVDownloadButton />
        </div>
        <div className="about-right">
          <div className="about-item">
            <div className="about-text">
              <p className="large-text">560+</p>
              <p className="small-text">Projects completed</p>
            </div>
          </div>
          <div className="about-item">
            <div className="about-text">
              <p className="large-text">560+</p>
              <p className="small-text">Projects completed</p>
            </div>
          </div>
          <div className="about-item">
            <div className="about-text">
              <p className="large-text">560+</p>
              <p className="small-text">Projects completed</p>
            </div>
          </div>
          <div className="about-item">
            <div className="about-text">
              <p className="large-text">560+</p>
              <p className="small-text">Projects completed</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-skills">
        <h4 className="skills-title">My skills</h4>
        <div className="skills-grid">
          <div className="skills-item">
            <img src={javascriptLogo} alt="JavaScript logo" />
            <p>JavaScript</p>
          </div>
          <div className="skills-item">
            <img
              src={reactLogo}
              alt="React logo"
              style={{
                width: "130px",
                marginBottom: "0.8rem",
                marginTop: "1rem",
              }}
            />
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
          <div className="skills-item">
            <img src={reduxLogo} alt="Redux logo" style={{ width: "150px" }} />
            <p>Redux & Redux Toolkit</p>
          </div>
          <div className="skills-item">
            <img
              src={expressLogo}
              alt="Express.js logo"
              style={{ width: "200px" }}
            />
            <p>Express.js</p>
          </div>
          <div className="skills-item">
            <img
              src={mongoddbLogo}
              alt="MongoDB logo"
              style={{
                width: "50px",
                marginBottom: "0.8rem",
                marginTop: "1rem",
              }}
            />
            <p>MongoDB</p>
          </div>
          <div className="skills-item">
            <img
              src={nextLogo}
              alt="html 5 logo"
              style={{
                width: "115px",
                backgroundColor: "white",
                borderRadius: "50%",
                marginBottom: "0.8rem",
                marginTop: "1rem",
              }}
            />
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
        <h4>My background</h4>
        <div className="timeline-grid">
          <div className="timeline-item">
            <div className="timeline-icon">
              <FaSchool className="tl-icon" />
            </div>
            <p className="timeline-duration">Dec. 2022</p>
            <h5>
              Advanced developer training / Rocket Training
              <span> - LeReacteur</span>
            </h5>
            <p>
              One-week intensive training on advanced React hooks, Next.js 12
              and 13, and Jest training.
            </p>
          </div>
          <div className="timeline-item">
            <div className="timeline-icon">
              <FaSchool className="tl-icon" />
            </div>
            <p className="timeline-duration">Oct. 2022 - Dec. 2022</p>
            <h5>
              Web and mobile app developer bootcamp<span> - LeReacteur</span>
            </h5>
            <p>
              10-week intensive bootcamp to become web and mobile application
              developer. We were trained on React and React Native. Centered
              around JavaScript, we learned to use Express.js, Axios and
              MongoDB.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
