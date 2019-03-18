import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Comment";

class Comment extends Component {
  render() {
    return (
      <div classname="container-comment">
        <div>{this.props.comment.username}</div>
        <div>{this.props.comment.text}</div>
      </div>
    );
  }
}

Comment.propTypes = {
  username: PropTypes.string,
  text: PropTypes.string
};

export default Comment;
