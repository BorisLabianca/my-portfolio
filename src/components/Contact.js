import { useSelector } from "react-redux";

const Contact = ({ content }) => {
  const { classIndex } = useSelector((store) => store.navigation);

  return (
    <div
      className={`main-section section sec5 contact ${
        classIndex === 4 ? "active" : ""
      }`}
    >
      <div className="contact-container">
        <div className="main-title">
          <h1>
            {content.h2Beg}
            <span>{content.h2Span}</span>
            <span className="big-text">{content.h2BgText}</span>
          </h1>
        </div>
        <div className="contact-content-container">
          <h2>Feel free to contact me</h2>
          <form className="contact-form">
            <div className="input-control">
              <input type="text" required placeholder="Your full name" />
              <input type="email" required placeholder="Your email" />
            </div>
            <div className="input-control">
              <input
                type="text"
                required
                placeholder="Please enter a subject"
              />
            </div>
            <div className="input-control">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Type your message"
                required
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
