import { useSelector } from "react-redux";

const About = () => {
  const { classIndex } = useSelector((store) => store.navigation);

  return (
    <div
      className={`main-section section sec2 about ${
        classIndex === 1 ? "active" : ""
      }`}
    >
      About
    </div>
  );
};
export default About;
