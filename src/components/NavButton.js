const NavButton = ({ icon, btnClass, index, pageTransitions }) => {
  return (
    <div
      className={btnClass[index]}
      onClick={() => {
        pageTransitions(index);
      }}
    >
      {icon}
    </div>
  );
};

export default NavButton;
