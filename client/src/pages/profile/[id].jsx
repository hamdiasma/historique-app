import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

function Profile(props) {
  console.log(useParams());
  console.log(props);
  return <div>Profile</div>;
}

Profile.propTypes = {};

export default Profile;
