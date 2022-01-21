import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { logOutAction } from "../../redux/actions/auth";
import { themeType } from "../../redux/type/types";
import Avatar from "../avatar/Avatar";

function Header(props) {
  const navLinks = [
    { label: "Home", icon: "fa fa-home", path: "/" },
    { label: "Message", icon: "fas fa-location-arrow", path: "/message" },
    { label: "Discovre", icon: "fas  fa-compass ", path: "/discover" },
    { label: "Notify", icon: "fa fa-heart", path: "/notify" },
  ];
  const dispatch = useDispatch();
  const { auth, theme } = useSelector((state) => state);
  const { pathname } = useLocation();

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
          <h1 className="navbar-brand text-uppercase p-0 m-0">Social-media</h1>
        </Link>
        <div className="menu">
          <ul className="navbar-nav flex-row mb-2 mb-lg-0">
            {navLinks.map((navlink, i) => (
              <li className={`nav-item px-2 ${isActive(navlink.path)}`} key={i}>
                <Link
                  className="nav-link "
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
                <Avatar src={auth.user.avatar} theme={theme} />
              </span>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link
                  className="dropdown-item"
                  to={`/profile/${auth.user._id}`}
                >
                  Profile
                </Link>
                <label
                  className="dropdown-item"
                  htmlFor="theme"
                  onClick={() =>
                    dispatch({
                      type: themeType.THEME,
                      payload: !theme,
                    })
                  }
                >
                  {!theme ? (
                    <>
                      {" "}
                      <i className="fas fa-moon"></i> dark
                    </>
                  ) : (
                    <>
                      {" "}
                      <i className="far fa-sun "></i> light
                    </>
                  )}
                </label>
                <hr className="dropdown-divider" />
                <Link
                  className="dropdown-item"
                  to="/"
                  onClick={() => dispatch(logOutAction())}
                >
                  logout
                </Link>
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
