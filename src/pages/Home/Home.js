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

function Section({ id, title, children }) {
  return (
    <React.Fragment>
      <section className="resume-section" id={id}>
        <div className="resume-section-content">
          {title && <h2 className="mb-5">{title}</h2>}
          {children}
        </div>
      </section>
      <hr className="m-0" />
    </React.Fragment>
  );
}

const Skills = () => {
  let data = {
    skills: [
      {
        title: "C / C++",
        progress: "75%",
      },
      {
        title: "Javascript",
        progress: "65%",
      },
      {
        title: "Python",
        progress: "45%",
      },
      {
        title: "HTML",
        progress: "90%",
      },
      {
        title: "CSS",
        progress: "80%",
      },
    ],
    frameworks: [
      {
        title: "React.js",
        progress: "90%",
      },
      {
        title: "Framer Motion",
        progress: "40%",
      },
      {
        title: "Photoshop / Figma / UI / UX",
        progress: "60%",
      },
      {
        title: "Django",
        progress: "50%",
      },
      {
        title: "Bootstrap",
        progress: "70%",
      },
      {
        title: "Material-UI",
        progress: "80%",
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
    <Section id="skills" title="Skills">
      <div className="subheading mb-3">Coding Languages</div>
      <div className="row mb-4">{skillsJsx}</div>
      <div className="subheading mb-3">Frameworks / Libraries</div>
      <div className="row mb-4">{frameworksJsx}</div>
    </Section>
  );
};

function Home() {
  return (
    <Container className="home-section">
      <div className="home-content-1">
        <div className="content-1-part">
          <div className="content-1-text">
            <Typething />
          </div>
        </div>
        <div className="content-1-part">
          <div className="content-1-img">
            <img className="home-img" src={photo} alt="photo" />
          </div>
        </div>
      </div>
      <Container className="home-about">
        <hr />
        <h1>About me</h1>
        <p className="home-about-body">
          My name is Yilin Li. I am an ECE master student at the University of
          Michigan - Ann Arbor. My specific track is computer vision area, and
          I'm also interested in machine learning and software development.
          Currently, I am actively looking for a full-time SDE job.
        </p>
      </Container>
      <Container className="home-skill">
        <hr />
        <h1>Skill Summary</h1>
        <Skills />
      </Container>
    </Container>
  );
}

export default Home;
