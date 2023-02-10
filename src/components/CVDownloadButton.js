import { useSelector } from "react-redux";
import { FaDownload } from "react-icons/fa";

const CVDownloadButton = () => {
  const { language } = useSelector((store) => store.language);

  return (
    <div className="btn-container">
      <a
        href={
          language === "fr"
            ? "https://drive.google.com/file/d/1GsOoxJNY-cUT27lo29702peHQkjKZWdg/view?usp=sharing"
            : "https://drive.google.com/file/d/11AjtDw6PzUhLdXPaKlTKJnFUe0eCpeFk/view?usp=sharing"
        }
        target="_blank"
        rel="noreferrer"
        className="main-btn"
      >
        <span className="btn-text">
          {language === "eng"
            ? "Download CV"
            : language === "fr"
            ? "Téléchargez mon CV"
            : language === "jap" && "履歴書をダウンロード"}
        </span>
        <span className="btn-icon">
          <FaDownload />
        </span>
      </a>
    </div>
  );
};

export default CVDownloadButton;
