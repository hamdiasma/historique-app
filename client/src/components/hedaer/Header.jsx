import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import home from "../../images/home.svg";
import near_me from "../../images/near_me.svg";
import explore from "../../images/explore.svg";
import favorite from "../../images/favorite1.svg";

function Header(props) {
  const navLinks = [
    { label: "Home", icon: home, path: "/" },
    { label: "Message", icon: near_me, path: "/message" },
    { label: "Discovre", icon: explore, path: "/discovre" },
    { label: "Notify", icon: favorite, path: "/notify" },
  ];
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between align-middle">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          H-BRO
        </a>
        <div className="menu">
          <ul className="navbar-nav flex-row mb-2 mb-lg-0">
            {navLinks.map((navlink, i) => (
              <li className="nav-item" key={i}>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={navlink.path}
                >
                  <span className="material-icons-outlined">
                    <img src={navlink.icon} alt="" />
                  </span>
                </Link>
              </li>
            ))}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                User
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    dark mode
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          {/* <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {};

export default Header;
