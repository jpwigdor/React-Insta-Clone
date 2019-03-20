import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Comment.css";

class Comment extends Component {
  render() {
    return (
      <div className="container-comment">
        <span className="username">{this.props.comment.username + " "}</span>
        <span>{this.props.comment.text}</span>
      </div>
    );
  }
}

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
};

export default Comment;
