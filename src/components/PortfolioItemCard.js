// import { useSelector } from "react-redux";
// import ImageSlider from "../components/ImageSlider";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

const PortfolioItemCard = ({ content }) => {
  // const { language } = useSelector((store) => store.language);
  // console.log(content);

  return (
    <div className="portfolio-item">
      <p className="stack-type">{content.stackType}</p>
      <div className="portfolio-image">
        {/* <ImageSlider slides={content.screenShots} /> */}
        <img src={content.screenShots[0]} alt="Screenshot of main page" />
        <div className="hover-item">
          <h3>{content.hoverH3}</h3>
          <div className="link-icons">
            {content.githubLinkBack && (
              <div className="link-icon-and-title">
                <a
                  href={content.githubLinkBack}
                  target="_blank"
                  rel="noreferrer"
                  className="link-icon"
                >
                  <FaGithub />
                </a>
                <p>Back</p>
              </div>
            )}
            <div className="link-icon-and-title">
              <a
                href={content.githubLinkFront}
                target="_blank"
                rel="noreferrer"
                className="link-icon"
              >
                <FaGithub />
              </a>
              <p>Front</p>
            </div>
            {content.netlifyLink && (
              <div className="link-icon-and-title">
                <a
                  href={content.netlifyLink}
                  target="_blank"
                  rel="noreferrer"
                  className="link-icon"
                >
                  <SiNetlify />
                </a>
                <p>Site</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <h3>{content.title}</h3>
      {/* <div className="tech-and-features-div">
        {content.usedTech.front.length > 0 && (
          <div>
            <p>
              {language === "eng"
                ? "Front: "
                : language === "fr"
                ? "Front : "
                : language === "jap" && "フロントエンド："}
            </p>
            <ul className="portfolio-front-tech">
              {content.usedTech.front.map((frontTech, index) => {
                return <li key={index}>{frontTech}</li>;
              })}
            </ul>
          </div>
        )}
        {content.usedTech.back.length > 0 && (
          <div>
            <p>
              {language === "eng"
                ? "Back: "
                : language === "fr"
                ? "Back : "
                : language === "jap" && "バックエンド："}
            </p>
            <ul className="portfolio-front-tech">
              {content.usedTech.back.map((backTech, index) => {
                return <li key={index}>{backTech}</li>;
              })}
            </ul>
          </div>
        )}
        {content.usedTech.features.length > 0 && (
          <div>
            <p>
              {language === "eng"
                ? "Features: "
                : language === "fr"
                ? "Fonctionnalités : "
                : language === "jap" && "特徴："}
            </p>
            <ul className="portfolio-front-tech">
              {content.usedTech.features.map((feature, index) => {
                return <li key={index}>{feature}</li>;
              })}
            </ul>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default PortfolioItemCard;
