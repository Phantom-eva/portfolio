import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import photo from "./photo.png";
import Typed from "typed.js";

function Typething() {
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
      <h1>
        <strong>Hello everyone!</strong>
      </h1>
      {/* Element to display typing strings */}
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
      <div className="skill-header">Programming Languages</div>
      <div className="skill-detail">{skillsJsx}</div>
      <div className="skill-header">Frameworks / Libraries</div>
      <div className="skill-detail">{frameworksJsx}</div>
    </Container>
  );
};

function Home() {
  return (
    <Container className="home-section">
      <Container className="home-content-1">
        <Typething className="type-part" />
      </Container>
      <Container className="home-about">
        <hr className="hr-type" />
        <h1 className="home-about-header">About me</h1>
        <img className="home-img" src={photo} alt="photo" />
        <div className="home-about-content">
          <ul>
            <li>
              My name is <strong>Yilin Li</strong>. You can also call me{" "}
              <strong color="purple">Michael</strong>.
            </li>
            <li>
              I am an alumnus of{" "}
              <a href="https://www.zju.edu.cn/english/">Zhejiang University</a>{" "}
              and <a href="https://umich.edu/">the University of Michigan</a>.
            </li>
            <li>
              I mainly focus on computer vision, machine learning and full-stack
              software development.
            </li>
            <li>Currently, I am actively looking for a full-time SDE job.</li>
          </ul>
        </div>
      </Container>
      <Container className="home-skill">
        <hr />
        <h1 className="home-about-header">Skill Summary</h1>
        <Skills />
      </Container>
    </Container>
  );
}

export default Home;
