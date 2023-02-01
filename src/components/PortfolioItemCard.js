import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

const PortfolioItemCard = ({ content }) => {
  return (
    <div className="portfolio-item">
      <div className="portfolio-image">
        <img src={content.img} alt="Screenshot of main page" />
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
    </div>
  );
};

export default PortfolioItemCard;
