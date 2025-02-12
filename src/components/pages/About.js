import React from "react";
import "../Portfolio.css"; // Use the same CSS
import profilePic from "../profile.jfif"; // Import the same image
import { Link } from "react-router-dom";

const About = () => {
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
        <h1>About Me</h1>
        <p>
        Self-starter and passionate Computer Science student with the ability to learn things be it programming languages
         or life skills and a enthusiast web developer and
          looking to collaborate for a project-based learning
           approach with people who have similar interests.
        </p>
      </div>
      <div className="image-container">
        <img src={profilePic} alt="Profile" />
      </div>
    </div>
  );
};

export default About;
