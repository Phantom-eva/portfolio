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
      <Container className="summary">
        <Container className="resume-header">Summary</Container>
        <Container className="resume-content">
          My name is Yilin Li. You can also call me Michael. <br />
          Recently, I graduated from the University of Michigan with a master's
          degree in Electrical and Computer Engineering. <br />
          Now, I mainly focus on computer vision and software development.
        </Container>
        <hr />
      </Container>
      <Container className="education">
        <Container className="resume-header">Education Background</Container>
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
        <hr />
      </Container>
      <Container className="work">
        <Container className="resume-header">Work Experience</Container>
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
              Code Optimization: Reduced the cyclomatic complexity of 25+
              functions. Updated project dependencies to the latest versions and
              fixed several conflicts.
            </li>
            <li>
              Compiler Bug Fix: Successfully located and solved the failure of
              10+ test cases using the GDB debugger.
            </li>
            <li>
              New Feature Development: Learned LLVM basics and developed a new
              pass to estimate compilation time.
            </li>
          </ul>
        </Container>
        <hr />
      </Container>
      <Container className="project">
        <Container className="resume-header">Research and Projects</Container>
        <Container className="resume-subheader">
          Personal Website Template Built with React (JavaScript, React, HTML,
          CSS)
        </Container>
        <Container className="resume-content">
          <ul>
            <li>
              Developed a modern and responsive personal website template using
              React, HTML, CSS, and JavaScript.
            </li>
            <li>
              Implemented reusable components and optimized the website for
              improved performance.
            </li>
            <li>
              Integrated various features such as navigation, contact forms, and
              portfolio sections to showcase projects and skills.
            </li>
          </ul>
        </Container>
        <Container className="resume-subheader">
          A Compiler For The COOL Programming Language (C++, Cool)
        </Container>
        <Container className="resume-content">
          <ul>
            <li>
              Designed and implemented a compiler for the COOL (Classroom
              Object-Oriented Language) programming language.
            </li>
            <li>
              Developed lexical analysis, syntactic analysis, semantic analysis,
              and code generation phases.
            </li>
            <li>
              Successfully compiled the COOL high-level language to MIPS
              assembly and executed on SPIM, the MIPS simulator.
            </li>
          </ul>
        </Container>
        <Container className="resume-subheader">
          Multiplayer Gobang Based on Reinforcement Learning (Python,
          Reinforcement Learning, Transformer)
        </Container>
        <Container className="resume-content">
          <ul>
            <li>
              Developed a multiplayer Gobang (also known as Five in a Row) game
              using reinforcement learning techniques.
            </li>
            <li>
              Utilized reinforcement learning algorithms, such as deep
              Q-learning, to train an AI agent to play Gobang.
            </li>
            <li>
              Evaluated the AI agent’s performance against human players and
              assessed its learning capabilities and gameplay effectiveness.
            </li>
          </ul>
        </Container>
        <Container className="resume-subheader">
          Image Inpainting Using GAN, Partial Convolution And Region
          Normalization (Python, Computer Vision, GAN, PyTorch)
        </Container>
        <Container className="resume-content">
          <ul>
            <li>
              Developed an image inpainting system using state-of-the-art
              techniques including Generative Adversarial Networks (GAN),
              Partial Convolution, and Region Normalization.
            </li>
            <li>
              Demonstrated the effectiveness of the system through extensive
              experimentation and evaluation on diverse datasets.
            </li>
          </ul>
        </Container>
        <Container className="resume-subheader">
          Exploration and Agent Improvement under Near-Real Market Environments
          Simulation Using DRL
        </Container>
        <Container className="resume-content">
          <ul>
            <li>
              Simulated the market trading environments in the real world.
              Applied several popular deep reinforcement learning algorithms to
              trade multiple stocks.
            </li>
            <li>
              Proposed an improved model using ensemble method. Evaluated the
              profitability of agents with different algorithms in extreme
              trading environments.
            </li>
          </ul>
        </Container>
        <hr />
      </Container>
      <Container className="honor">
        <Container className="resume-header">Honors and Awards</Container>
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
        <hr />
      </Container>
      <Container className="other">
        <Container className="resume-header">Other Experience</Container>
        <Container className="resume-subheader">
          Volunteer teacher in elementary school
        </Container>
        <Container className="resume-time">Summer 2018</Container>
        <Container className="resume-content">
          <ul>
            <li>
              Taught more than 30 students science and managed the daily affairs
              of the class
            </li>
          </ul>
        </Container>
      </Container>
      <Resumebutton />
    </Container>
  );
}

export default Resume;
