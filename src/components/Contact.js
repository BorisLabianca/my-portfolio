import { useSelector } from "react-redux";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = ({ content }) => {
  const { classIndex } = useSelector((store) => store.navigation);
  const clearForm = () => {
    window.onbeforeunload = () => {
      for (const form of document.getElementsByTagName("form")) {
        form.reset();
      }
    };
  };
  clearForm();
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
          </h1>
        </div>
        <div className="contact-content-container">
          {/* <form className="contact-form">
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
          </form> */}
          <form
            id="fs-frm"
            name="simple-contact-form"
            acceptCharset="utf-8"
            action="https://formspree.io/f/xzbqdaqr"
            method="post"
            className="contact-form"
          >
            <fieldset id="fs-frm-inputs">
              <div className="input-control-1">
                <div className="name-input">
                  <label htmlFor="full-name">
                    {content.fullName}
                    <span className="required">{content.required}</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="full-name"
                    placeholder={content.fullNamePlaceholder}
                    required
                  />
                </div>
                <div className="email-input">
                  <label htmlFor="email-address">
                    {content.emailAddress}
                    <span className="required">{content.required}</span>
                  </label>
                  <input
                    type="email"
                    name="_replyto"
                    id="email-address"
                    placeholder={content.emailAddressPlaceholder}
                    required
                  />
                </div>
              </div>
              <div className="input-control">
                <div className="subject-input">
                  <label htmlFor="subject">
                    {content.subject}
                    <span className="required">{content.required}</span>
                  </label>
                  <input
                    name="subject"
                    placeholder={content.subjectPlaceholder}
                    required
                  />
                </div>
              </div>

              <div className="input-control">
                <div className="message-input">
                  <label htmlFor="message">
                    {content.message}
                    <span className="required">{content.required}</span>
                  </label>
                  <textarea
                    rows="8"
                    name="message"
                    id="message"
                    placeholder={content.messagePlaceholder}
                    required
                  ></textarea>
                </div>
              </div>
              <input
                type="hidden"
                name="_subject"
                id="email-subject"
                value="Contact Form Submission"
              />
            </fieldset>
            <input
              type="submit"
              value={content.submitBtn}
              className="submit-btn"
            />
          </form>
          <h2>{content.findMeOn}</h2>
          <div className="contact-links">
            <a href="https://github.com/BorisLabianca">
              <FaGithub className="contact-icon" />
            </a>
            <a href="https://www.linkedin.com/in/boris-labianca-01a52871/">
              <FaLinkedin className="contact-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
