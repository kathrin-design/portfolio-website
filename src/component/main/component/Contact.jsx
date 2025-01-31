import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="about-page border border-dark d-flex flex-column justify-content-center align-items-center gap-5"
    >
      <div className="d-flex flex-column">
        <p className="text-center fw-medium mb-2">Get To Know More</p>
        <p className="text-center fs-1 text-dark fw-semibold">Contact</p>
      </div>
      <div className="d-flex flex-row gap-4">
      <a
        href="https://wa.me/+6282272910058"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black"
      >
        <i class="fa-brands fa-whatsapp fa-2x"></i>
      </a>
      <a
        href="https://linkedin.com/kathrinpanjaitan"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black"
      >
        <i class="fa-brands fa-linkedin fa-2x"></i>
      </a>
      <a
        href="https://github.com/kathrin-design"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black"
      >
        <i class="fa-brands fa-github fa-2x"></i>
      </a>
      </div>
    </div>
  );
}

export default Contact;
