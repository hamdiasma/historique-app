import React from "react";
import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { logOutAction } from "../../redux/actions/auth";
import Avatar from "../avatar/Avatar";

function Menu(props) {
  const dispatch = useDispatch();

  const navLinks = [
    { label: "home", path: "/" },
    { label: "products", path: "/products" },
    { label: "historique", icon: "fas  fa-compass ", path: "/historique" },
  ];

  const { auth } = useSelector((state) => state);
  const { pathname } = useLocation();
  const isActive = (page) => {
    if (page === pathname) {
      return "active";
    } else {
      return "";
    }
  };

  return (
    <div className="menu">
      <ul className="navbar-nav flex-row mb-2 mb-lg-0">
        {navLinks.map((navlink, i) => (
          <li className={`nav-item px-2 ${isActive(navlink.path)}`} key={i}>
            <Link className="nav-link " aria-current="page" to={navlink.path}>
              <span className="material-icons-outlined">
                <i>{navlink.label}</i>
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
            <Avatar src={auth.user.avatar} size={"medium-avatar"} />
          </span>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to={`/profile/${auth.user._id}`}>
              Profile
            </Link>

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
  );
}

Menu.propTypes = {
  auth: PropTypes.object,
  theme: PropTypes.bool,
  navLinks: PropTypes.array,
};

export default Menu;
