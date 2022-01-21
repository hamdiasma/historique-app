import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import home from "../../images/home.svg";
import near_me from "../../images/near_me.svg";
import explore from "../../images/explore.svg";
import favorite from "../../images/favorite1.svg";
import { useSelector, useDispatch } from "react-redux";
import { logOutAction } from "../../redux/actions/auth";

function Header(props) {
  const navLinks = [
    { label: "Home", icon: "fa fa-home", path: "/" },
    { label: "Message", icon: "fas fa-compass", path: "/message" },
    { label: "Discovre", icon: "fas fa-location-arrow", path: "/discovre" },
    { label: "Notify", icon: "fa fa-heart", path: "/notify" },
  ];
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);
  const { pathname } = useLocation();

  console.log(pathname);

  const isActive = (page) => {
    if (page === pathname) {
      return "active";
    } else {
      return "";
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between align-middle">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          H-BRO
        </Link>
        <div className="menu">
          <ul className="navbar-nav flex-row mb-2 mb-lg-0">
            {navLinks.map((navlink, i) => (
              <li className={`nav-item ${isActive(navlink.path)}`} key={i}>
                <Link
                  className="nav-link"
                  aria-current="page"
                  to={navlink.path}
                >
                  <span className="material-icons-outlined">
                    <i className={`${navlink.icon} `}></i>
                  </span>
                </Link>
              </li>
            ))}
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                User
              </span>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/">
                    profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    dark mode
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/"
                    onClick={() => dispatch(logOutAction())}
                  >
                    logout
                  </Link>
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
