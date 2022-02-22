import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";
import logo from "./SportSeeLogo.svg";

const Header = (props) => {
  return (
    <nav className="nav-bar">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>Acceuil</div>
      <div>Profil</div>
      <div>Réglage</div>
      <div>Communité</div>
    </nav>
  );
};

Header.propTypes = {};

export default Header;
