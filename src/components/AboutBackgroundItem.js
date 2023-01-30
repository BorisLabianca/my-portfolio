const AboutBackgroundItem = ({ icon, content }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-icon">{icon}</div>
      <p className="timeline-duration">{content.timelineDuration}</p>
      <h5>
        {content.h5Beg}
        <span>{content.h5Span}</span>
      </h5>
      <p>{content.description}</p>
    </div>
  );
};

export default AboutBackgroundItem;
