import { Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import "./Resume.css";
import pdf from "../Resume/yilinli-resume-sde.pdf";

function Resumebutton() {
  return (
    <div>
      <Button
        variant="primary"
        href={pdf}
        target="_blank"
        style={{ maxWidth: "250px" }}
      >
        <AiOutlineDownload />
        &nbsp;Click here to download my resume.
      </Button>
    </div>
  );
}

function Resume() {
  return (
    <div className="resume">
      <Resumebutton />
      <div className="education">Education Background</div>
      <div className="work"></div>
      <div className="project"></div>
      <div className="honor"></div>
    </div>
  );
}

export default Resume;
