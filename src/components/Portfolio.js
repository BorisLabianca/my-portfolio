import { useSelector } from "react-redux";
import PortfolioItemCard from "./PortfolioItemCard";

const Portfolio = ({ content }) => {
  const { classIndex } = useSelector((store) => store.navigation);

  return (
    <div
      className={`main-section section sec3 portfolio ${
        classIndex === 2 ? "active" : ""
      }`}
    >
      <div className="main-title">
        <h1>
          {content.h2Beg}
          <span>{content.h2Span}</span>
          <span className="big-text">{content.h2BgText}</span>
        </h1>
      </div>
      <p className="portfolio-text">{content.portfolioText}</p>
      <div className="portfolio-container">
        {content.portfolioItems.map((portfolioItem, index) => {
          return <PortfolioItemCard key={index} content={portfolioItem} />;
        })}
        {/* <div className="portfolio-item">
          <div className="portfolio-image">
            <img
              src="https://res.cloudinary.com/dbe27rnpk/image/upload/v1675094907/portfolio/Capture_d_e%CC%81cran_2023-01-05_a%CC%80_14.11.55_gxdxrj.png"
              alt="Screenshot of main page"
            />
            <div className="hover-item">
              <h3>Project source</h3>
              <div className="link-icons">
                <a
                  href="https://github.com/BorisLabianca/happycow-web"
                  target="_blank"
                  rel="noreferrer"
                  className="link-icon"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://boris-labianca-happycow.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="link-icon"
                >
                  <SiNetlify />
                </a>
              </div>
            </div>
          </div>
          <h3>HappyCow Clone</h3>
        </div> */}
      </div>
    </div>
  );
};
export default Portfolio;
