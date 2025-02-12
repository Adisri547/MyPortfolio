import React from "react";
import "../Portfolio.css";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="portfolio-container">
       {/* Navbar */}
            <nav className="navbar">
              <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/skills">Skills</Link></li>
              </ul>
            </nav>
      <div className="text-content scrollable">
        <h1>My Projects</h1>
        <p>Here are some of the projects I have worked on.</p>

        <div className="project">
          <h2>Sign Bridge (Sign Language Detection)</h2>
          <p><strong>Machine Learning (Aug. 2020 - June 2024)</strong></p>
          <ul>
            <li>Enhanced video data precision using MediaPipe and OpenCV for accurate sign language recognition.</li>
            <li>Engineered advanced CNN and LSTM models, achieving 100% accuracy through refined datasets.</li>
            <li>Created a real-time communication solution that converts sign language to text or speech, benefiting the hearing-impaired community.</li>
          </ul>
        </div>

        <div className="project">
          <h2>Faculty Finder</h2>
          <p><strong>Android Development (Sep. 2022 - Oct. 2023)</strong></p>
          <ul>
            <li>Developed an Android app in Java using Android Studio for quick faculty location tracking.</li>
            <li>Designed an intuitive UI to help users select departments and faculty names for precise room and building locations.</li>
            <li>Streamlined campus navigation, enhancing user experience through step-by-step selection.</li>
          </ul>
        </div>

        <div className="project">
          <h2>Invoice Management Application</h2>
          <p><strong>Frontend + Backend (June 2023 - July 2023)</strong></p>
          <ul>
            <li>Built an AI-powered Java and React.js FinTech app for B2B invoice management.</li>
            <li>Implemented a responsive dashboard, data visualization, and predictive analytics for better financial decisions.</li>
            <li>Automated workflows, reduced errors, and improved accuracy in B2B financial processes.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
