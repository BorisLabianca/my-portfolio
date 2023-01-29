import { useSelector } from "react-redux";

const AboutThisSite = () => {
  const { classIndex } = useSelector((store) => store.navigation);

  return (
    <div
      className={`main-section section sec4 about-this-site ${
        classIndex === 3 ? "active" : ""
      }`}
    >
      AboutThisSite icons
      <a
        target="_blank"
        href="https://icons8.com/icon/108784/javascript"
        rel="noreferrer"
      >
        JavaScript
      </a>{" "}
      icon by{" "}
      <a target="_blank" href="https://icons8.com" rel="noreferrer">
        Icons8
      </a>
      <a
        target="_blank"
        href="https://icons8.com/icon/jD-fJzVguBmw/redux"
        rel="noreferrer"
      >
        Redux
      </a>{" "}
      icon by{" "}
      <a target="_blank" href="https://icons8.com" rel="noreferrer">
        Icons8
      </a>
      <a
        target="_blank"
        href="https://icons8.com/icon/20909/html-5"
        rel="noreferrer"
      >
        Html 5
      </a>{" "}
      icon by{" "}
      <a target="_blank" href="https://icons8.com" rel="noreferrer">
        Icons8
      </a>
      <a
        target="_blank"
        href="https://icons8.com/icon/21278/css3"
        rel="noreferrer"
      >
        CSS3
      </a>{" "}
      icon by{" "}
      <a target="_blank" href="https://icons8.com" rel="noreferrer">
        Icons8
      </a>
      <a
        target="_blank"
        href="https://icons8.com/icon/54087/nodejs"
        rel="noreferrer"
      >
        Nodejs
      </a>{" "}
      icon by{" "}
      <a target="_blank" href="https://icons8.com" rel="noreferrer">
        Icons8
      </a>
      <a
        target="_blank"
        href="https://icons8.com/icon/CIAZz2CYc6Kc/tailwindcss"
        rel="noreferrer"
      >
        Tailwindcss
      </a>{" "}
      icon by{" "}
      <a target="_blank" href="https://icons8.com" rel="noreferrer">
        Icons8
      </a>
      <a
        target="_blank"
        href="https://icons8.com/icon/e57Y1CnsOasB/adobe-premiere-pro"
        rel="noreferrer"
      >
        Adobe Premiere Pro
      </a>{" "}
      icon by{" "}
      <a target="_blank" href="https://icons8.com" rel="noreferrer">
        Icons8
      </a>
      <a
        target="_blank"
        href="https://icons8.com/icon/13631/adobe-illustrator"
        rel="noreferrer"
      >
        Adobe Illustrator
      </a>{" "}
      icon by{" "}
      <a target="_blank" href="https://icons8.com" rel="noreferrer">
        Icons8
      </a>
      <a
        target="_blank"
        href="https://icons8.com/icon/13677/adobe-photoshop"
        rel="noreferrer"
      >
        Adobe Photoshop
      </a>{" "}
      icon by{" "}
      <a target="_blank" href="https://icons8.com" rel="noreferrer">
        Icons8
      </a>
    </div>
  );
};
export default AboutThisSite;
