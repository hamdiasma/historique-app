import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Menu from "./Menu";
import Search from "./Search";

function Header(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between align-middle">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <h1 className="navbar-brand text-uppercase p-0 m-0">Social-media</h1>
        </Link>
        <Search />
        <Menu />
      </div>
    </nav>
  );
}

Header.propTypes = {};

export default Header;
