import React from "react";
import "../Portfolio.css";
import profilePic from "../profile.jfif";
import { Link } from "react-router-dom";

const Skills = () => {
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
      <div className="text-content">
        <h1>My Skills</h1>
        <p>Here are some of the technical and soft skills I have acquired:</p>
        
        <ul>
          <li><strong>Languages:</strong> C/C++, Python, JavaScript, HTML+CSS, XML</li>
          <li><strong>Libraries:</strong> C++ Standard Library, Python Libraries, React.js</li>
          <li><strong>Web Dev Tools:</strong> VS Code, Git, GitHub</li>
          <li><strong>Frameworks:</strong> React.js</li>
          <li><strong>Tools:</strong> Git, Postman, AWS, Jira, Selenium, Regex</li>
          <li><strong>Areas of Interest:</strong> Web Design and Development</li>
          <li><strong>Soft Skills:</strong> Problem Solving, Self-learning, Presentation, Adaptability</li>
        </ul>
      </div>
      <div className="image-container">
        <img src={profilePic} alt="Profile" />
      </div>
    </div>
  );
};

export default Skills;
