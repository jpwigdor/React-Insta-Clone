import React from "react";

// import logoWord from "../../assets/logo_word";
// import like_icon from "../../assets/like_icon";

import "./SearchBar.css";

// TODO: Search - SearchBar.js
//   Set up the search bar will like the comment input and the like button. In your function, filter out any post whose username doesn't match the search term passed in, then update the state with the resulting data.

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
