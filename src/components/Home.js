import { useSelector } from "react-redux";
import { FaMoon, FaSun, FaAdjust } from "react-icons/fa";
import { MdWeb } from "react-icons/md";

const Home = () => {
  const { classIndex } = useSelector((store) => store.navigation);
  // console.log("Home.js log : ", classIndex);
  return (
    <div
      className={`main-section section sec1 home ${
        classIndex === 0 ? "active" : ""
      }`}
    >
      Home
      <FaMoon />
      <FaSun />
      <FaAdjust />
      <MdWeb />
    </div>
  );
};
export default Home;
