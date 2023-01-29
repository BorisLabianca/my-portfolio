import { FaDownload } from "react-icons/fa";

const CVDownloadButton = () => {
  return (
    <div className="btn-container">
      <a
        href="https://drive.google.com/file/d/1b3SZGNJ421K_Iid_QVeyP9k2DWtRNqDd/view?usp=share_link"
        className="main-btn"
      >
        <span className="btn-text">Download CV</span>
        <span className="btn-icon">
          <FaDownload />
        </span>
      </a>
    </div>
  );
};

export default CVDownloadButton;
