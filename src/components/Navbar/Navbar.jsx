import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
import { BsMoon, BsSun } from "react-icons/bs";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";

const Navbar = () => {

  // responsive menu icon
  const [clicktwo, setClicktwo] = useState(false);
  const handleClicktwo = () => setClicktwo(!clicktwo);

  // navbar color change
  const [navbarColor, setNavbarColor] = useState(false);
  const changeNavbar = () => {
    if (window.scrollY >= 80) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  }
  window.addEventListener("scroll", changeNavbar);

  // change theme
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [theme, setTheme] = useState("light-theme");

  const changeTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <header id="site-header" className={navbarColor ? "site-header header-scrolled fixed-top" : "site-header fixed-top"}>
      <div className="container">
        <nav className="navbar navbar-expand-lg stroke">
          <a className="navbar-brand" href="/">
            Med<span className="sub-logo">i</span>ck
          </a>

          <div className={clicktwo ? "mobile-navbar fixed-top" : "collapse navbar-collapse "} id="navbarNav">
            <ul className="navbar-nav mx-lg-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/dept">Departments</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
              <li className="search-bar ml-lg-3 mr-lg-5 mt-lg-0 mt-4">
                <form className="search position-relative">
                  <input type="search" className="search__input" name="search" placeholder="Search here.."
                    onload="equalWidth()" required="" />
                  <FaSearch className=" search__icon" />
                </form>
              </li>
            </ul>
          </div>

          <div className="mobile-position">
            <nav className="navigation">
              <div className="theme-switch-wrapper">
                <label className="theme-switch" for="checkbox">
                  <input type="checkbox" id="checkbox" />
                  <div className="mode-container fixed" onClick={() => changeTheme()}>
                    <div className="icon" onClick={handleClick}>
                      {click ? <BsSun /> : <BsMoon />}
                    </div>
                  </div>
                </label>
              </div>
            </nav>
          </div>

          <div className="responsive-menu" onClick={handleClicktwo}>
            {clicktwo ? <FaTimes className="icon-expand" /> : <FaBars className="icon-close" />}
          </div>

        </nav>

        
      </div>
    </header >
  )
}

export default Navbar