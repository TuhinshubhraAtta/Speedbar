import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.png";
import "./navbar.css";

const Menu = () => (
  <>
    <p>
      <Link to="/about">About</Link>
      <Link to="/features">Features</Link>
      <Link to="/resources">Resources</Link>
    </p>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="spd__navbar">
      <div className="spd__navbar-links">
        <div className="spd__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="spd__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="spd__navbar-sign">
        <p>Sign in</p>
        <button type="button"> Sign up</button>
      </div>
      <div className="spd__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="spd__navbar-menu_container scale-up-center">
            <div className="spd__navbar-menu_container-links">
              <Menu />
              <div className="spd__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button"> Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
