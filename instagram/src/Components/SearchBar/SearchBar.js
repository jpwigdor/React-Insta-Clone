import React from "react";

// import logoWord from "../../assets/logo_word";
// import like_icon from "../../assets/like_icon";

import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="container-search-bar">
      <div className="sbar-left">
        <div className="logo">{/* <img alt="IGlogo" src={logoWord} /> */}</div>
        <div className="logo-word" />
      </div>
      <input type="text" placeholder="Search" />
      <div className="sbar-right">
        {/* <img src={like_icon} alt="like Icon" /> */}
        <div>{/*like icon*/}</div>
        <div>{/*profile icon*/}</div>
      </div>
    </div>
  );
};

export default SearchBar;
