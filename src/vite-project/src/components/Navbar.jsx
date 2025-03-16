import React from "react";
import "./styles/Navbar.css";  
import logoIcon from "../assets/img/logo.png";
import homeIcon from "../assets/img/home.png";
import moviesIcon from "../assets/img/movies.png";
import seriesIcon from "../assets/img/series.png";
import savedFilmsIcon from "../assets/img/savedfilms.png";
import profilePhotoIcon from "../assets/img/profilphoto.png";

const Navbar = ({ setCurrentPage }) => {
  const handlePageChange = (page) => {
    window.history.pushState({}, "", `/${page}`);
    setCurrentPage(page);
  };

  return (
    <div className="navbar">
      <img src={logoIcon} alt="Logo" className="navbar-logo-image" />
      <div className="navbar-links">
        <img
          src={homeIcon}
          alt="Home"
          className="navbar-icon"
          onClick={() => handlePageChange("home")}
        />
        <img
          src={moviesIcon}
          alt="Movies"
          className="navbar-icon"
          onClick={() => handlePageChange("movies")}
        />
        <img
          src={seriesIcon}
          alt="Series"
          className="navbar-icon"
          onClick={() => handlePageChange("series")}
        />
        <img
          src={savedFilmsIcon}
          alt="Saved Films"
          className="navbar-icon"
          onClick={() => handlePageChange("savedfilms")}
        />
      </div>
      <img src={profilePhotoIcon} alt="Profile" className="navbar-profile-image" />
    </div>
  );
};

export default Navbar;
