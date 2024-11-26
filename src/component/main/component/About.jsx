import React from "react";
import aboutPic from "../../../assets/about-pic.png";
import education from "../../../assets/education.png";
import experience from "../../../assets/experience.png";

function About() {
  return (
    <div
      id="about"
      className="about-page border border-dark d-flex flex-column justify-content-center align-items-center gap-5"
    >
      <div className="d-flex flex-column">
        <p className="text-center fw-medium mb-2">Get To Know More</p>
        <p className="text-center fs-1 text-dark fw-semibold">About Me</p>
      </div>

      <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-5 border border-dark">
  <img
    src={aboutPic}
    alt="about me"
    className="w-25 align-self-center rounded-5"
  />
  <div className="d-flex flex-column gap-5">
    <div className="d-flex flex-column flex-md-row gap-5">
      <div className="d-flex flex-column justify-content-center align-items-center border border-dark rounded-3 p-2">
        <img src={experience} alt="experience" className="logo mb-1" />
        <p className="text-center fw-bold m-0">Experience</p>
        <p className="text-center m-0">1+ year</p>
        <p className="text-center m-0">Frontend Development</p>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center border border-dark rounded-3 p-2">
        <img src={education} alt="education" className="logo mb-1" />
        <p className="text-center fw-bold m-0">Education</p>
        <p className="text-center m-0">B.Sc. Bachelors Degree</p>
        <p className="text-center m-0">HariSenin Frontend Bootcamp</p>
      </div>
    </div>
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quas
        pariatur libero minus? Sequi, laudantium dolorum cupiditate
        ratione ab aspernatur ad, veritatis vero quia delectus harum porro
        ullam provident. Minus natus quae dolorum harum corporis
        asperiores facilis veniam facere, laboriosam maxime culpa
        cupiditate tempore eaque? Quod dolor exercitationem itaque minus.
      </p>
    </div>
  </div>
</div>

    </div>
  );
}

export default About;
