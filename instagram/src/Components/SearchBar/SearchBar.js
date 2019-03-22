import React from "react";
import styled from "styled-components";

import logoWord from "../../assets/logo_word.png";
import camera from "../../assets/logo_camera.jpg";
import like_icon from "../../assets/like_icon.png";
import compass from "../../assets/compass.png";
import profile from "../../assets/profile_icon.png";

import "./SearchBar.css";

// TODO: Search - SearchBar.js
//   Set up the search bar will like the comment input and the like button. In your function, filter out any post whose username doesn't match the search term passed in, then update the state with the resulting data.

const StyledSearchBar = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const StyledSBarLeft = styled.div`
  justify-content: flex-start;
`;

const StyledSBarLeftImg = styled.img`
  height: 40px;
  padding: 0px 5px;
`;

const StyledIword = styled(StyledSBarLeftImg)`
  margin-top: 15px;
  border-left: 1px solid rgb(119, 119, 119);
`;

const StyledSBarWrapper = styled.div`
  border: 1px solid darkgrey;
  background-color: #f5f8fa;
`;

const StyledSBarRight = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledSBarRightImg = styled.img`
  height: 40px;
`;

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <StyledSBarLeft>
        <StyledSBarLeftImg className="camera" alt="camera" src={camera} />
        <StyledIword className="iword" alt="IGlogo" src={logoWord} />
      </StyledSBarLeft>
      <StyledSBarWrapper>
        <i className="fas fa-search" />
        <input type="text" placeholder="Search" className="sbar" />
      </StyledSBarWrapper>
      <StyledSBarRight>
        <StyledSBarRightImg src={compass} alt="compass" />
        <StyledSBarRightImg src={like_icon} alt="like icon" />
        <StyledSBarRightImg src={profile} alt="profile icon" />
      </StyledSBarRight>
    </StyledSearchBar>
  );
};

export default SearchBar;
