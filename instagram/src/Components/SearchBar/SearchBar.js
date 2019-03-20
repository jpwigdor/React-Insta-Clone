import React from "react";

import logoWord from "../../assets/logo_word.png";
import camera from "../../assets/logo_camera.jpg";
import like_icon from "../../assets/like_icon.png";
import compass from "../../assets/compass.png";
import profile from "../../assets/profile_icon.png";

import "./SearchBar.css";

// TODO: Search - SearchBar.js
//   Set up the search bar will like the comment input and the like button. In your function, filter out any post whose username doesn't match the search term passed in, then update the state with the resulting data.

const SearchBar = () => {
  return (
    <div className="container-search-bar">
      <div className="sbar-left">
        <div className="logo">
          <img className="camera" alt="camera" src={camera} />
          <img className="iword" alt="IGlogo" src={logoWord} />
        </div>
      </div>
      <div className="sbar-wrapper">
        <i className="fas fa-search" />
        <input type="text" placeholder="Search" className="sbar" />
      </div>
      <div className="sbar-right">
        <img src={compass} alt="compass" />
        <img src={like_icon} alt="like icon" />
        <img src={profile} alt="profile icon" />
      </div>
    </div>
  );
};

export default SearchBar;
