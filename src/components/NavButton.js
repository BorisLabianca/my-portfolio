import { useSelector, useDispatch } from "react-redux";
import { navigateBetweenSections } from "../features/navigation/navigationSlice";

const NavButton = ({ icon, index, description }) => {
  const dispatch = useDispatch();
  const { classIndex } = useSelector((store) => store.navigation);
  const { language } = useSelector((store) => store.language);
  return (
    <div
      className={`control control-${index + 1} ${
        classIndex === index ? "active-btn" : ""
      }`}
      onClick={() => {
        dispatch(navigateBetweenSections(index));
      }}
    >
      <div className="before" style={{ width: "max-content" }}>
        {language === "eng"
          ? description.eng
          : language === "fr"
          ? description.fr
          : language === "jap" && description.jap}
      </div>
      {icon}
    </div>
  );
};

export default NavButton;
