import { useSelector, useDispatch } from "react-redux";
import { navigateBetweenSections } from "../features/navigation/navigationSlice";

const NavButton = ({ icon, index }) => {
  const dispatch = useDispatch();
  const { classIndex } = useSelector((store) => store.navigation);
  return (
    <div
      className={`control control-${index + 1} ${
        classIndex === index ? "active-btn" : ""
      }`}
      onClick={() => {
        dispatch(navigateBetweenSections(index));
      }}
    >
      {icon}
    </div>
  );
};

export default NavButton;
