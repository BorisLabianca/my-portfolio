const ShowcasedSkill = ({ content }) => {
  return (
    <div className="about-item">
      <div className="about-text">
        <p className="large-text">{content.largeText}</p>
        <p className="small-text">{content.smallText}</p>
      </div>
    </div>
  );
};

export default ShowcasedSkill;
