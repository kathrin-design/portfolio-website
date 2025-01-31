import React from "react";

function Hero() {
  return (
    <div id="home" className="d-flex flex-column my-auto py-5">
      <p className="text-left fs-4 fw-semibold">Hello, I'm</p>
      <p className="text-left fs-1 text-dark fw-bold">
        Kathrin Rut Agustina Panjaitan
      </p>
      <p className="text-left fs-3 text-light-emphasis fw-semibold">
        Frontend Developer
      </p>
      <div className="d-flex flex-row justify-content-center pt-4">
        <button className="border-3 p-3 fs-5 fw-semibold rounded-5 me-2">
          Download CV
        </button>
        <button className="border-3 p-3 rounded-5 bg-black ms-2">
          <a href="#contact" className="text-white fs-5">
            Contact Info
          </a>
        </button>
      </div>
    </div>
  );
}

export default Hero;
