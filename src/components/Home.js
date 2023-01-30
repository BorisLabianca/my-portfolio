import { useSelector } from "react-redux";
import profilePic from "../assets/portfolio_profile_pic.svg";
import CVDownloadButton from "./CVDownloadButton";

const Home = ({ content }) => {
  const { classIndex } = useSelector((store) => store.navigation);
  // console.log("Home.js log : ", classIndex);
  return (
    <div className={`section sec1 home ${classIndex === 0 ? "active" : ""}`}>
      <div className="home-content">
        <div className="home-left">
          <div className="home-shape"></div>
          <div className="image">
            <img src={profilePic} alt="My profile portrait" />
          </div>
        </div>
        <div className="home-right">
          <div className="name">
            {content.h1Beg}
            <span>{content.h1Span}</span>
            {content.h1End}
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
            doloremque esse! Tenetur veritatis aut, tempore deserunt id rem quo
            consequuntur nobis obcaecati voluptates accusantium soluta quisquam
            harum ullam! Velit, suscipit! Similique explicabo sed, numquam unde
            officiis blanditiis enim iste rem eum eaque eos itaque reprehenderit
            dolorem ipsam tenetur voluptate, iusto doloremque nihil? Ratione
            blanditiis harum soluta officiis accusantium ducimus distinctio.
          </p>
          <CVDownloadButton />
        </div>
      </div>
    </div>
  );
};
export default Home;
