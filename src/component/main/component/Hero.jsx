import React from "react";
import profilePic from "../../../assets/profile-pic.png";
import linkedInLogo from "../../../assets/linkedin.png";
import githubLogo from "../../../assets/github.png";

function Hero() {
  return (
    <div
      id="home"
      className="home-page border border-dark d-flex flex-lg-row justify-content-center align-items-center gap-5"
    >
      <img
        src={profilePic}
        alt="profile picture"
        className="profile-pic w-50"
      />
      <div className="d-flex flex-column my-auto border">
        <p className="text-center fs-5 fw-semibold">Hello, I'm</p>
        <p className="text-center fs-2 text-dark fw-bold">
          Kathrin Rut Agustina Panjaitan
        </p>
        <p className="text-center fs-4 text-light-emphasis fw-semibold">
          Frontend Developer
        </p>
        <div className="d-flex flex-row justify-content-center">
          <button className="border-3 p-3 rounded-5 me-2">Download CV</button>
          <button className="border-3 p-3 rounded-5 text-white bg-black ms-2">
            Contact Info
          </button>
        </div>
        <div className="d-flex flex-row justify-content-center mt-4">
          <a
            href="https://linkedin.com/kathrinpanjaitan"
            target="_blank"
            rel="noopener noreferrer"
            className="link me-1"
          >
            <img src={linkedInLogo} alt="linkedIn Logo" className="link-logo" />
          </a>
          <a
            href="https://github.com/kathrin-design"
            target="_blank"
            rel="noopener noreferrer"
            className="link ms-1"
          >
            <img src={githubLogo} alt="github Logo" className="link-logo" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
