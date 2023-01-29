import { useSelector } from "react-redux";

const AboutThisSite = () => {
  const { classIndex } = useSelector((store) => store.navigation);

  return (
    <div
      className={`main-section section sec4 about-this-site ${
        classIndex === 3 ? "active" : ""
      }`}
    >
      AboutThisSite
    </div>
  );
};
export default AboutThisSite;
