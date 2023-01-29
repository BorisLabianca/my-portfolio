import { useSelector } from "react-redux";

const Portfolio = () => {
  const { classIndex } = useSelector((store) => store.navigation);

  return (
    <div
      className={`main-section section sec3 portfolio ${
        classIndex === 2 ? "active" : ""
      }`}
    >
      Portfolio
    </div>
  );
};
export default Portfolio;
