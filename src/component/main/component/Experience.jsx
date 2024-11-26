import React from "react";
import checkmark from "../../../assets/checkmark.png";

function Experience() {
  return (
    <div
      id="experience"
      className="experience-page border border-dark d-flex flex-column justify-content-center align-items-center gap-5 p-3"
    >
      <div className="d-flex flex-column">
        <p className="text-center fw-medium mb-2">Explore My</p>
        <p className="text-center fs-1 text-dark fw-semibold">Experience</p>
      </div>
      <div className="d-flex flex-column flex-lg-row border border-dark rounded-4 w-100 p-4 gap-4 justify-content-center align-items-center">
        <div className="d-flex flex-column text-center text-lg-start">
          <p className="fs-3 fw-semibold">Frontend Development</p>
          <div className="d-flex flex-column flex-md-row gap-3">
            <div className="d-flex flex-column justify-content-center align-items-center gap-3">
              <div className="d-flex flex-row align-items-center">
                <img src={checkmark} alt="checkmark" className="logo" />
                <div className="d-flex flex-column ms-4">
                  <p className="mb-0">HTML</p>
                  <p className="mb-0">Experienced</p>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center">
                <img src={checkmark} alt="checkmark" className="logo" />
                <div className="d-flex flex-column ms-4">
                  <p className="mb-0">TypeScript</p>
                  <p className="mb-0">Basic</p>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center">
                <img src={checkmark} alt="checkmark" className="logo" />
                <div className="d-flex flex-column ms-4">
                  <p className="mb-0">Python</p>
                  <p className="mb-0">Basic</p>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center gap-3">
              <div className="d-flex flex-row align-items-center">
                <img src={checkmark} alt="checkmark" className="logo" />
                <div className="d-flex flex-column ms-4">
                  <p className="mb-0">CSS</p>
                  <p className="mb-0">Experienced</p>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center">
                <img src={checkmark} alt="checkmark" className="logo" />
                <div className="d-flex flex-column ms-4">
                  <p className="mb-0">JavaScript</p>
                  <p className="mb-0">Basic</p>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center">
                <img src={checkmark} alt="checkmark" className="logo" />
                <div className="d-flex flex-column ms-4">
                  <p className="mb-0">Material UI</p>
                  <p className="mb-0">Intermediate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
