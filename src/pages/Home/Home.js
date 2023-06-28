import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "./Home.css";
import photo from "../../Assets/img/photo.png";
import Typed from "typed.js";
import {
  BsFillPersonFill as BsPerson,
  BsBookHalf as BsBook,
  BsFillBuildingFill as BsBuilding,
  BsCalendarCheck as BsCalendar,
} from "react-icons/bs";

function Typeeffect() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Welcome to my website."], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop: true,
      fadeOut: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <h1 className="type-header">Hello everyone!</h1>
      <hr style={{ color: "white" }} />
      <span ref={el} className="type"></span>
    </div>
  );
}

const Skill = ({ skill: { title, progress }, secondary = false }) => {
  return (
    <div className="progress">
      <div
        className={`progress-bar progress-bar-striped progress-bar-animated ${
          secondary ? "bg-info" : ""
        }`}
        role="progressbar"
        style={{ width: progress }}
      >
        <span className="text-left pl-2">{title}</span>
      </div>
    </div>
  );
};

const Skills = () => {
  let data = {
    skills: [
      {
        title: "C / C++",
        progress: "90%",
      },
      {
        title: "Python",
        progress: "90%",
      },
      {
        title: "HTML",
        progress: "80%",
      },
      {
        title: "CSS",
        progress: "70%",
      },
      {
        title: "Java",
        progress: "50%",
      },
      {
        title: "Javascript",
        progress: "50%",
      },
    ],
    frameworks: [
      {
        title: "PyTorch",
        progress: "80%",
      },
      {
        title: "Pandas",
        progress: "80%",
      },
      {
        title: "Django",
        progress: "70%",
      },
      {
        title: "React.js",
        progress: "60%",
      },
      {
        title: "Bootstrap",
        progress: "60%",
      },
    ],
  };

  const { skills, frameworks } = data;

  const skillsJsx = skills.map((skill, index) => (
    <div className="col-md-8 py-1" key={index}>
      <Skill skill={skill} />
    </div>
  ));

  const frameworksJsx = frameworks.map((skill, index) => (
    <div className="col-md-8 py-1" key={index}>
      <Skill skill={skill} secondary />
    </div>
  ));

  return (
    <Container className="skills">
      <Container className="skill-header">Programming Languages</Container>
      <Container className="skill-detail">{skillsJsx}</Container>
      <Container className="skill-header">Frameworks / Libraries</Container>
      <Container className="skill-detail">{frameworksJsx}</Container>
    </Container>
  );
};

function Home() {
  return (
    <Container className="home-section">
      <Container className="home-intro">
        <Typeeffect className="type-part" />
      </Container>
      <Container className="home-about">
        <h1 className="home-about-header">About me</h1>
        <img className="home-img" src={photo} alt="lyl" />
        <Container className="home-about-content">
          <Container>
            <BsPerson />
            &nbsp;My name is <strong>Yilin Li</strong>. You can also call me{" "}
            <strong color="purple">Michael</strong>.
          </Container>
          <Container>
            <BsBuilding />
            &nbsp;I am an alumnus of{" "}
            <a href="https://www.zju.edu.cn/english/" className="ref-link">
              <strong>Zhejiang University</strong>
            </a>{" "}
            and{" "}
            <a href="https://umich.edu/" className="ref-link">
              <strong>the University of Michigan</strong>
            </a>
            .
          </Container>
          <Container>
            <BsBook />
            &nbsp;I mainly focus on <strong>CV</strong>,<strong>ML</strong> and{" "}
            <strong>full-stack software development</strong>.
          </Container>
          <Container>
            <BsCalendar />
            &nbsp;Currently, I am actively looking for a full-time SDE job.
          </Container>
        </Container>
      </Container>
      <Container className="home-skill">
        <h1 className="home-about-header">Skill Summary</h1>
        <Skills />
      </Container>
    </Container>
  );
}

export default Home;
