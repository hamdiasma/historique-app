import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Menu from "./Menu";
import Search from "./Search";

function Header(props) {
  return (
    <div className="header bg-light">
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between align-middle">
        <Link className="navbar-brand" to="/" className="logo">
          <h1 className="navbar-brand text-uppercase p-0 m-0">Social-media</h1>
        </Link>
        <Search />
        <Menu />
      </nav>
    </div>
  );
}

Header.propTypes = {};

export default Header;
