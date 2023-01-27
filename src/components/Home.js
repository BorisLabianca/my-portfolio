import { FaMoon, FaSun, FaAdjust } from "react-icons/fa";

const Home = ({ activeSection }) => {
  return (
    <div className={activeSection[0]}>
      Home
      <FaMoon />
      <FaSun />
      <FaAdjust />
    </div>
  );
};
export default Home;
