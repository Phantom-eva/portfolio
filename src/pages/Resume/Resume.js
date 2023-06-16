import { Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import "./Resume.css";
import pdf from "../Resume/yilinli-resume-sde.pdf";

function Resume() {
  return (
    <div>
      <Button
        variant="primary"
        href={pdf}
        target="_blank"
        style={{ maxWidth: "250px" }}
      >
        <AiOutlineDownload />
        &nbsp;Download CV
      </Button>
    </div>
  );
}

export default Resume;
