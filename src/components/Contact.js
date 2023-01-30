import { useSelector } from "react-redux";

const Contact = ({ content }) => {
  const { classIndex } = useSelector((store) => store.navigation);

  return (
    <div
      className={`main-section section sec5 contact ${
        classIndex === 4 ? "active" : ""
      }`}
    >
      <div className="main-title">
        <h2>
          Contact <span>me</span>
          <span className="big-text">Contact</span>
        </h2>
      </div>
    </div>
  );
};
export default Contact;
