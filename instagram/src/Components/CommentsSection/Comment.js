import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import "./Comment.css";

const StyledContainerComment = styled.div`
  padding: 3px 0px;
`;

const StyledUsername = styled.span`
  padding-left: 10px;
  font-weight: bold;
`;

class Comment extends Component {
  render() {
    return (
      <StyledContainerComment>
        <StyledUsername>{this.props.comment.username + " "}</StyledUsername>
        <span>{this.props.comment.text}</span>
      </StyledContainerComment>
    );
  }
}

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
};

export default Comment;
