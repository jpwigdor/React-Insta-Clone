import React, { Component } from "react";

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

export default Comment;
