import { useSelector } from "react-redux";

const Contact = () => {
  const { classIndex } = useSelector((store) => store.navigation);

  return (
    <div
      className={`main-section section sec5 contact ${
        classIndex === 4 ? "active" : ""
      }`}
    >
      Contact
    </div>
  );
};
export default Contact;
