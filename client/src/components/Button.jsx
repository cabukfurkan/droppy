import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Style
import style from "./Button.module.css";

export default function Button(props) {
  return (
    <div>
      <Link to={props.path} className={style.buttonLink}>
        <button className={style.button} onClick={props.buttonHandler}>
          {props.children}
        </button>
      </Link>
    </div>
  );
}

Button.propTypes = {
  path: PropTypes.string.isRequired,
  buttonHandler: PropTypes.func,
  children: PropTypes.elementType.isRequired,
};
