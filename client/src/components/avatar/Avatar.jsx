import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function Avatar({ src }) {
  const { theme } = useSelector((state) => state);
  return (
    <>
      <img
        className="user_avatar"
        src={src}
        alt="avatar"
        style={{ filter: theme ? "invert(1)" : "invert(0)" }}
      />
    </>
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  theme: PropTypes.bool.isRequired,
};

export default Avatar;
