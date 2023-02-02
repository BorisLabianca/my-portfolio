import { useSelector } from "react-redux";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const AboutThisSite = ({ content }) => {
  const { classIndex } = useSelector((store) => store.navigation);
  const { language } = useSelector((store) => store.language);
  console.log(language);

  return (
    <div
      className={`main-section section sec4 about-this-site ${
        classIndex === 3 ? "active" : ""
      }`}
    >
      <div className="main-title">
        <h1>
          {content.h2Beg}
          <span>{content.h2Span}</span>
        </h1>
      </div>
      <h2 className="origin-title">{content.siteOriginTitle}</h2>
      <div className="concept-description">{content.conceptDescription}</div>
      <div className="contact-links-about-this-site">
        <a href="https://www.linkedin.com/in/boris-labianca-01a52871/">
          <FaLinkedin className="contact-icon" />
        </a>
        <a href="https://github.com/BorisLabianca/my-portfolio">
          <FaGithub className="contact-icon" />
        </a>
      </div>
      <h2 className="tech-title">{content.techStackTitle}</h2>
      <ul className="tech-stack">
        <li>{content.stackItem1}</li>
        <li>{content.stackItem2}</li>
        <li>{content.stackItem3}</li>
      </ul>
      <h2 className="tech-title">{content.credits}</h2>
      {language === "eng" ? (
        <div className="icons-credits">
          <a
            target="_blank"
            href="https://icons8.com/icon/108784/javascript"
            rel="noreferrer"
          >
            JavaScript
          </a>
          ,{" "}
          <a
            target="_blank"
            href="https://icons8.com/icon/123603/react-native"
            rel="noreferrer"
          >
            React Native
          </a>
          ,{" "}
          <a
            target="_blank"
            href="https://icons8.com/icon/jD-fJzVguBmw/redux"
            rel="noreferrer"
          >
            Redux
          </a>
          ,{" "}
          <a
            target="_blank"
            href="https://icons8.com/icon/20909/html-5"
            rel="noreferrer"
          >
            Html 5
          </a>
          ,{" "}
          <a
            target="_blank"
            href="https://icons8.com/icon/21278/css3"
            rel="noreferrer"
          >
            CSS 3
          </a>
          ,{" "}
          <a
            target="_blank"
            href="https://icons8.com/icon/CIAZz2CYc6Kc/tailwindcss"
            rel="noreferrer"
          >
            Tailwind Css
          </a>
          ,{" "}
          <a
            target="_blank"
            href="https://icons8.com/icon/13677/adobe-photoshop"
            rel="noreferrer"
          >
            Adobe Photoshop
          </a>
          ,{" "}
          <a
            target="_blank"
            href="https://icons8.com/icon/13631/adobe-illustrator"
            rel="noreferrer"
          >
            Adobe Illustrator
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            href="https://icons8.com/icon/e57Y1CnsOasB/adobe-premiere-pro"
            rel="noreferrer"
          >
            Adobe Premiere Pro
          </a>{" "}
          icons all by{" "}
          <a target="_blank" href="https://icons8.com" rel="noreferrer">
            Icons8
          </a>
          .
        </div>
      ) : language === "fr" ? (
        <div className="icons-credits">
          Les icônes{" "}
          <a
            target="_blank"
            href="https://icons8.com/icon/108784/javascript"
            rel="noreferrer"
          >
            JavaScript
          </a>
          ,{" "}
          <a
            target="_blank"
            href="https://icons8.com/icon/123603/react-native"
            rel="noreferrer"
          >
            React Native
          </a>
          ,{" "}
          <a
            target="_blank"
            href="https://icons8.com/icon/jD-fJzVguBmw/redux"
            rel="noreferrer"
          >
            Redux
          </a>
          ,{" "}
          <a
            target="_blank"
            href="https://icons8.com/icon/20909/html-5"
            rel="noreferrer"
          >
            Html 5
          </a>
          ,{" "}
          <a
            target="_blank"
            href="https://icons8.com/icon/21278/css3"
            rel="noreferrer"
          >
            CSS 3
          </a>
          ,{" "}
          <a
            target="_blank"
            href="https://icons8.com/icon/CIAZz2CYc6Kc/tailwindcss"
            rel="noreferrer"
          >
            Tailwind Css
          </a>
          ,{" "}
          <a
            target="_blank"
            href="https://icons8.com/icon/13677/adobe-photoshop"
            rel="noreferrer"
          >
            Adobe Photoshop
          </a>
          ,{" "}
          <a
            target="_blank"
            href="https://icons8.com/icon/13631/adobe-illustrator"
            rel="noreferrer"
          >
            Adobe Illustrator
          </a>{" "}
          et{" "}
          <a
            target="_blank"
            href="https://icons8.com/icon/e57Y1CnsOasB/adobe-premiere-pro"
            rel="noreferrer"
          >
            Adobe Premiere Pro,
          </a>{" "}
          viennent toutes de{" "}
          <a target="_blank" href="https://icons8.com" rel="noreferrer">
            Icons8
          </a>
          .
        </div>
      ) : (
        language === "jap" && (
          <div className="icons-credits">
            <a
              target="_blank"
              href="https://icons8.com/icon/108784/javascript"
              rel="noreferrer"
            >
              JavaScript
            </a>
            、
            <a
              target="_blank"
              href="https://icons8.com/icon/123603/react-native"
              rel="noreferrer"
            >
              React Native
            </a>
            、
            <a
              target="_blank"
              href="https://icons8.com/icon/jD-fJzVguBmw/redux"
              rel="noreferrer"
            >
              Redux
            </a>
            、
            <a
              target="_blank"
              href="https://icons8.com/icon/20909/html-5"
              rel="noreferrer"
            >
              Html 5
            </a>
            、
            <a
              target="_blank"
              href="https://icons8.com/icon/21278/css3"
              rel="noreferrer"
            >
              CSS 3
            </a>
            、
            <a
              target="_blank"
              href="https://icons8.com/icon/CIAZz2CYc6Kc/tailwindcss"
              rel="noreferrer"
            >
              Tailwind Css
            </a>
            、
            <a
              target="_blank"
              href="https://icons8.com/icon/13677/adobe-photoshop"
              rel="noreferrer"
            >
              Adobe Photoshop
            </a>
            、
            <a
              target="_blank"
              href="https://icons8.com/icon/13631/adobe-illustrator"
              rel="noreferrer"
            >
              Adobe Illustrator
            </a>{" "}
            と
            <a
              target="_blank"
              href="https://icons8.com/icon/e57Y1CnsOasB/adobe-premiere-pro"
              rel="noreferrer"
            >
              Adobe Premiere Pro
            </a>
            のアイコン全ては
            <a target="_blank" href="https://icons8.com" rel="noreferrer">
              Icons8
            </a>
            の作品です。
          </div>
        )
      )}
    </div>
  );
};
export default AboutThisSite;
