import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import profilePic from "./profile.jfif";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      {/* Navbar Inside the Overlay */}
      <nav className="navbar">
        <div className="logo-container">
          <h2 className="logo">Portfolio.</h2>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
        </ul>
      </nav>

      {/* Left Side - Text Content */}
      <div className="text-content">
        <h1>Hello, It's Me</h1>
        <h1>
          <strong>Aditya Srivastav</strong>
        </h1>
        <h2>
          And I'm a <span style={{ color: "cyan" }}>Frontend Developer</span>
        </h2>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Possimus nulla sed saepe rerum, animi expedita.
        </p> */}

        {/* Social Media Icons */}
        <div className="social-icons">
          <a
            href="https://github.com/Adisri547"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-srivastav-308751157/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/srivastavadi76"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/adi_tya.exe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Download CV Button */}
        <button
          className="download-btn"
          onClick={() =>
            (window.location.href =
              "https://drive.google.com/file/d/1DBJIlEwxej0q8fWqQjdmBS7OSlJ6FAt2/view?usp=sharing")
          }
        >
          Resume
        </button>
      </div>

      {/* Right Side - Image Container */}
      <div className="image-container">
        <img src={profilePic} alt="Profile" />
      </div>
    </div>
  );
};

export default Portfolio;
