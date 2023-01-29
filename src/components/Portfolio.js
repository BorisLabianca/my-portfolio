import { useSelector } from "react-redux";

const Portfolio = () => {
  const { classIndex } = useSelector((store) => store.navigation);

  return (
    <div
      className={`main-section section sec3 portfolio ${
        classIndex === 2 ? "active" : ""
      }`}
    >
      <div className="main-title">
        <h2>
          My <span>Portfolio</span>
          <span className="big-text">my work</span>
        </h2>
      </div>
      <p className="portfolio-text">
        Here are the projects I have done during the bootcamp and after.
      </p>
      <div className="portfolio">
        <div className="portfolio-item">
          <div className="portfolio-image">1:45:06</div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
