import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

function Avatar({ src, size }) {
  const { theme } = useSelector((state) => state);
  return (
    <>
      <img
        className={`user_avatar  ${size}`}
        src={src}
        alt="avatar"
        style={{ filter: theme ? "invert(1)" : "invert(0)" }}
      />
    </>
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  theme: PropTypes.bool,
};

export default Avatar;
