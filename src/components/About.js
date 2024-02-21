import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  return (
    <div className="container mt-5">
      <div className="card mb-4">
        <div className="card-body">
          <h1 className="card-title">Saurabh Gawande</h1>
          <p className="card-text">
            <FontAwesomeIcon icon="fa-solid fa-user-pen" /> Wardha, Maharashtra
          </p>
          <p className="card-text">
            <i class="bi bi-envelope"></i> saurabhgawande2016@gmail.com
          </p>
          <p className="card-text">
            <i class="bi bi-phone-vibrate"></i> +918459023950
          </p>
          <div className="d-flex justify-content-center">
            <a
              href="https://github.com/Saurabh-Gawande"
              className="me-3 text-dark"
            >
              <img src="github-icon.svg" alt="GitHub" width="32" height="32" />
            </a>
            <a
              href="https://in.linkedin.com/in/saurabh-gawande2"
              className="text-dark"
            >
              <img
                src="linkedin-icon.svg"
                alt="LinkedIn"
                width="32"
                height="32"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">
            <i class="bi bi-chat-left-text-fill"></i> Objective
          </h2>
          <p className="card-text">
            Experienced MERN developer seeking opportunities as a Frontend
            Developer or Backend Developer.
          </p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">
            <i class="bi bi-mortarboard-fill"></i>Education
          </h2>
          <p className="card-text">
            Bachelor of Technology (B.Tech)
            <br />
            Bajaj Institute of Technology
            <br />
            Completed: 2021
          </p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">
            <i class="bi bi-briefcase-fill"></i> Experience
          </h2>
          <p className="card-text">
            <strong>Frontend Developer</strong>
            <br />
            Public System Lab - IITD
            <br />
            Since: Sep 2023
            <br />
            <strong>Responsibilities:</strong>
            <ul>
              <li>
                Developed user interfaces for web applications using React and
                Next.js.
              </li>
              <li>
                Collaborated with backend developers to integrate frontend with
                server-side logic.
              </li>
              <li>Implemented responsive designs using CSS and SCSS.</li>
              <li>Version control using Git and GitHub.</li>
            </ul>
          </p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">
            <i class="bi bi-tools"></i>Technical Skills
          </h2>
          <ul className="list-unstyled">
            <li>JavaScript (ES6, React, Next.js)</li>
            <li>Node.js and Express.js</li>
            <li>MongoDB</li>
            <li>CSS / SCSS</li>
            <li>HTML</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">
            <i class="bi bi-calendar-heart"></i> Hobbies
          </h2>
          <ul className="list-unstyled">
            <li>Playing cricket</li>
            <li>Solving coding problems on various platforms</li>
          </ul>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title">
            <i class="bi bi-person-fill-add"></i> Soft Skills
          </h2>
          <ul className="list-unstyled">
            <li>Time Management</li>
            <li>Public Speaking</li>
            <li>Team Player</li>
            <li>Fast Learner</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
