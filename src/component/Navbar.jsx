import React, { useState, useRef, useEffect } from "react";
import "../App.css";

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
        <a href="#home" className="fs-3">
          Kathrin Rut Agustina Panjaitan
        </a>
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
      <nav id="hamburger-nav" className="hamburger-navbar border-bottom">
        <a href="#home" className="hamburger-navbar fs-3 fw-bold text-black">
          Kathrin Rut Agustina Panjaitan
        </a>
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
            <div className="menu-links list-unstyled d-flex flex-column h-100 position-fixed top-0 start-0 overflow-auto bg-black py-4">
              <div className="d-flex flex-column justify-content-center align-items-center mb-5">
                <a
                  href="#home"
                  className="fs-2 text-center text-white fw-semibold px-2"
                >
                  Kathrin Rut Agustina Panjaitan
                </a>
              </div>
              <li className="nav-list">
                <a href="#home" className="text-start text-white fs-5">
                  <i className="fa-solid fa-house pe-sm-2"></i>
                  Home
                </a>
              </li>
              <li className="nav-list">
                <a href="#about" className="text-start text-white fs-5">
                  <i className="fa-solid fa-user pe-sm-2"></i>
                  About
                </a>
              </li>
              <li className="nav-list">
                <a href="#experience" className="text-start text-white fs-5">
                  <i className="fa-solid fa-list-check pe-sm-2"></i>
                  Experience
                </a>
              </li>
              <li className="nav-list">
                <a href="#projects" className="text-start text-white fs-5">
                  <i className="fa-solid fa-file pe-sm-2"></i>
                  Projects
                </a>
              </li>
              <li className="nav-list">
                <a href="#contact" className="text-start text-white fs-5">
                  <i className="fa-solid fa-envelope pe-sm-2"></i>
                  Contact
                </a>
              </li>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
