import React from "react";
import "./Performance.scss";
import { ReactComponent as Apple } from "../../assets/images/apple.svg";
import PropTypes from "prop-types";

const Performance = (props) => {
  return (
    <div className="performance">
      <div className="img">
        <Apple />
      </div>
      <p> apple</p>
    </div>
  );
};

Performance.propTypes = {};

export default Performance;
