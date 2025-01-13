import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import sideBar from "../assets/side-bar.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuDropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (e) => {
    if (
      menuDropdownRef.current &&
      !menuDropdownRef.current.contains(e.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav
        id="desktop-navbar"
        className="navbar navbar-expand top-0 start-0 w-100"
      >
        <div id="hero" className="fs-3">
          Kathrin rut agustina panjaitan
        </div>
        <ul className="nav-links d-flex flex-row align-items-center list-unstyled my-auto">
          <li className="me-4">
            <a href="#about" className="text-secondary-emphasis fs-4">
              About
            </a>
          </li>
          <li className="me-4">
            <a href="#experience" className="text-secondary-emphasis fs-4">
              Experience
            </a>
          </li>
          <li className="me-4">
            <a href="#projects" className="text-secondary-emphasis fs-4">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="text-secondary-emphasis fs-4">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <nav id="hamburger-nav" className="hamburger-navbar border border-dark">
        <div className="hamburger-navbar fs-3">
          Kathrin Rut Agustina Panjaitan
        </div>
        <div className="hamburger-menu position-relative d-inline-block top-0 start-0 me-2">
          <div className="hamburger-icon d-flex flex-column align-items-center justify-content-center">
            {isMenuOpen ? (
              <i
                className="fa-solid fa-xmark fa-3x p-4 position-fixed z-1"
                onClick={toggleMenu}
                ref={menuDropdownRef}
              ></i>
            ) : (
              <i
                className="fa-solid fa-bars fa-3x p-4 position-fixed z-1"
                onClick={toggleMenu}
                ref={menuDropdownRef}
              ></i>
            )}
          </div>
          {isMenuOpen && (
            <div className="menu-links list-unstyled d-flex flex-column ps-2 h-100 w-25 position-fixed top-0 start-0 overflow-auto bg-black">
              <div className="d-flex flex-column justify-content-center align-items-center mb-5">
                <img src={sideBar} alt="side bar" className="w-50" />
                <p className="fs-4 text-center text-white fw-semibold px-2">
                  Kathrin rut agustina panjaitan
                </p>
              </div>
              <li className="me-4">
                <a href="#home" className="text-start text-white fs-4">
                  <i className="fa-solid fa-house pe-sm-4"></i>
                  Home
                </a>
              </li>
              <li className="me-4">
                <a href="#about" className="text-start text-white fs-4">
                  <i className="fa-solid fa-user pe-sm-4"></i>
                  About
                </a>
              </li>
              <li className="me-4">
                <a href="#experience" className="text-start text-white fs-4">
                  <i className="fa-solid fa-list-check pe-sm-4"></i>
                  Experience
                </a>
              </li>
              <li className="me-4">
                <a href="#projects" className="text-start text-white fs-4">
                  <i className="fa-solid fa-file pe-sm-4"></i>
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-start text-white fs-4">
                  <i className="fa-solid fa-envelope pe-sm-4"></i>
                  Contact
                </a>
              </li>
              <li className="mode text-start text-white fs-4 d-flex flex-row">
                <div className="moon-sun bottom-0 start-0 border border-white">
                  <i className="fa-solid fa-moon"></i>
                  <i className="fa-solid fa-sun"></i>
                </div>
                <span className="mode-text text">Dark Mode</span>

                <div className="toggle-switch">
                  <span className="switch"></span>
                </div>
              </li>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
