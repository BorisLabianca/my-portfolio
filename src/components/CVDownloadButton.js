import { useSelector } from "react-redux";
import { FaDownload } from "react-icons/fa";

const CVDownloadButton = () => {
  const { language } = useSelector((store) => store.language);

  return (
    <div className="btn-container">
      <a
        href="https://drive.google.com/file/d/1b3SZGNJ421K_Iid_QVeyP9k2DWtRNqDd/view?usp=share_link"
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
