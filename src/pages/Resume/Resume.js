import { Button, Container } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import "./Resume.css";
import pdf from "../../Assets/pdf/yilinli-resume-sde.pdf";

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
        &nbsp;
        <div className="resume-button">Click here to download my resume.</div>
      </Button>
    </div>
  );
}

function Resume() {
  return (
    <Container className="resume">
      <Container className="education">
        <Container className="resume-header">Education Background</Container>
        <hr />
        <Container className="resume-subheader">
          University of Michigan - Ann Arbor
        </Container>
        <Container className="resume-job-title">
          Master of Science in Electrical and Computer Engineering (Minor:
          Computer Vision)
        </Container>
        <Container className="resume-time">Aug. 2021- Apr. 2023</Container>
        <Container className="resume-content">
          <ul>
            <li>GPA: 4.00/4.00</li>
            <li>
              Courses taken:
              <ul>
                <li>EECS 442 Computer Vision A+</li>
                <li>EECS 501 Probability and Random Processes A</li>
                <li>EECS 542 Advanced Top Computer Vision A</li>
                <li>EECS 545 Machine Learning A-</li>
                <li>EECS 551 Matrix Methods for Signal Processing A</li>
                <li>EECS 592 AI Foundations A</li>
                <li>SI 507 Intermediate Programming A</li>
                <li>SI 618 Data Manipulation and Analysis A+</li>
                <li>SI 664 Database Application A</li>
              </ul>
            </li>
          </ul>
        </Container>
        <Container className="resume-subheader">Zhejiang University</Container>
        <Container className="resume-job-title">
          Bachelor of Engineering in Electronic Information (Minor: Information
          Engineering)
        </Container>
        <Container className="resume-time">Aug. 2017- Jun. 2021</Container>
        <Container className="resume-content">
          <ul>
            <li>GPA: 3.68/4.00 (Major: 3.82/4.00)</li>
            <li>
              Courses taken:
              <ul>
                <li>Fundamentals of C Programming 91</li>
                <li>Wireless Network Application 98</li>
                <li>Digital Image Processing 94</li>
                <li>Data Analysis and Algorithm Design 88</li>
                <li>Principles of Embedded Computing System Design 90</li>
              </ul>
            </li>
          </ul>
        </Container>
      </Container>
      <Container className="work">
        <Container className="resume-header">Work Experience</Container>
        <hr />
        <Container className="resume-subheader">
          Huawei Hangzhou Research Institute
        </Container>
        <Container className="resume-job-title">
          Software Development Engineer Intern
        </Container>
        <Container className="resume-time">Jul. 2020- Aug. 2020</Container>
        <Container className="resume-content">
          <ul>
            <li>
              Code Optimization: Reduced the cyclomatic complexity of more than
              25 functions.
            </li>
            <li>
              Compiler Bug Fix: Updated dependent library versions and fixed
              conflicts, successfully located and solved the failure of several
              example test cases using the GDB debugger.
            </li>
            <li>
              New Feature Development: Learned LLVM basics and developed a new
              pass to estimate compilation time.
            </li>
          </ul>
        </Container>
      </Container>
      <Container className="project">
        <Container className="resume-header">Research and Projects</Container>
        <hr />
        <Container className="resume-subheader">
          A Compiler For The COOL Programming Language:
        </Container>
        <Container className="resume-content">
          <ul>
            <li>
              Implemented the four phases of the compiler, including lexical
              analysis, syntax analysis, semantic analysis, and code generation.
            </li>
            <li>
              Successfully compiled the COOL high-level language to MIPS
              assembly and executed successfully on SPIM, the MIPS simulator.
            </li>
          </ul>
        </Container>
        <Container className="resume-subheader">
          A Movie Recommendation System Using Collaborative Filtering:
        </Container>
        <Container className="resume-content">
          <ul>
            <li>
              Designed and implemented a movie recommendation system with good
              user interface.
            </li>
            <li>
              Provided reasonable movie recommendation results based on filter
              criteria keywords.
            </li>
          </ul>
        </Container>
        <Container className="resume-subheader">
          A Student Management System:
        </Container>
        <Container className="resume-content">
          <ul>
            <li>
              Design and implement a student management system with different
              permissions of student teaching assistants and teachers.
            </li>
            <li>
              Realized the functions of adding courses, adding grades, modifying
              student information, etc.
            </li>
          </ul>
        </Container>
        <Container className="resume-subheader">
          Image Inpainting Using GAN, Partial Convolution And Region
          Normalization:
        </Container>
        <Container className="resume-content">
          <ul>
            <li>
              Proposed a model based on a conditional GAN, replaced all
              convolutional layers with partial convolutional layers.
            </li>
            <li>
              Implemented Region Normalization in the Generator, and achieved
              better qualitative and quantitative results.
            </li>
          </ul>
        </Container>
      </Container>
      <Container className="honor">
        <Container className="resume-header">Honors and Awards</Container>
        <hr />
        <Container className="resume-content">
          <ul>
            <li>Outstanding Graduate of Zhejiang University - 2021</li>
            <li>
              Meritorious Winner in Mathematical Contest in Modeling - 2020
            </li>
            <li>University Student Scholarship of Texas Instruments - 2019</li>
            <li>Outstanding Volunteer of Zhejiang University - 2019</li>
          </ul>
        </Container>
      </Container>
      <Resumebutton />
    </Container>
  );
}

export default Resume;
