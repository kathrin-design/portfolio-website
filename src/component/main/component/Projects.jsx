import React from "react";
import projectCard1 from "../../../assets/project-card1.png";
import projectCard2 from "../../../assets/project-card2.png";
import projectCard3 from "../../../assets/project-card3.png";
import projectCard4 from "../../../assets/project-card4.png";
import projectCard5 from "../../../assets/project-card5.png";
import projectCard6 from "../../../assets/project-card6.png";

function Projects() {
  return (
    <div
      id="projects"
      className="projects-page border border-dark d-flex flex-column justify-content-center align-items-center gap-5"
    >
      <div className="d-flex flex-column">
        <p className="text-center fw-medium mb-2">Take a look</p>
        <p className="text-center fs-1 text-dark fw-semibold">Projects</p>
      </div>

      <div className="d-flex flex-column flex-lg-row bg-body-secondary gap-2 p-4 rounded-4 justify-content-center align-items-center">
        <div
          id="carouselExample"
          className="carousel slide w-75"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={projectCard1}
                className="d-block w-75 mx-auto"
                alt="Project 1"
              />
            </div>
            <div className="carousel-item">
              <img
                src={projectCard2}
                className="d-block w-75 mx-auto"
                alt="Project 2"
              />
            </div>
            <div className="carousel-item">
              <img
                src={projectCard3}
                className="d-block w-75 mx-auto"
                alt="Project 3"
              />
            </div>
            <div className="carousel-item">
              <img
                src={projectCard4}
                className="d-block w-25 mx-auto"
                alt="Project 4"
              />
            </div>
            <div className="carousel-item">
              <img
                src={projectCard5}
                className="d-block w-25 mx-auto"
                alt="Project 5"
              />
            </div>
            <div className="carousel-item">
              <img
                src={projectCard6}
                className="d-block w-25 mx-auto"
                alt="Project 6"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-dark h-100"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-dark h-100"
              aria-hidden="true"
            ></span>
          </button>
        </div>

        <div className="card-body d-flex flex-column align-items-center w-100 w-lg-50">
          <h5 className="card-title">Education Website</h5>
          <p className="card-text text-center mb-0">
            The educational website is a user-friendly platform designed using
            HTML, CSS, and JavaScript, aimed at providing an interactive and
            engaging learning experience.
          </p>
          <a href="#">
            <i className="fa-brands fa-linkedin fa-lg py-3 text-dark"></i>
          </a>
          <a href="#" className="btn btn-primary">
            Take a look
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
