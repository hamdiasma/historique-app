import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Menu from "./Menu";

function Header(props) {
  return (
    <div className="header bg-light">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between align-middle">
          <Link className="navbar-brand logo" to="/">
            <h1 className="navbar-brand text-uppercase p-0 m-0">Hist-app</h1>
          </Link>
          <Menu />
        </nav>
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;
