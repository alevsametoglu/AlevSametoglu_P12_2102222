import React from "react";
import PropTypes from "prop-types";
import "./SideBar.scss";
import { ReactComponent as YogaIcon } from "../../assets/images/YogaIcon.svg";
import { ReactComponent as SwimIcon } from "../../assets/images/SwimIcon.svg";
import { ReactComponent as BodyBuildIcon } from "../../assets/images/BodyBuildIcon.svg";
import { ReactComponent as BycIcon } from "../../assets/images/BycIcon.svg";

const SideBar = (props) => {
  return (
    <aside className="side-bar">
      <nav>
        <YogaIcon className="icons" />
        <SwimIcon className="icons" />
        <BodyBuildIcon className="icons" />
        <BycIcon className="icons" />
      </nav>
      <footer>Copyright, SportSee 2020</footer>
    </aside>
  );
};

SideBar.propTypes = {};

export default SideBar;
