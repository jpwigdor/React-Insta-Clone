import React, { Component } from "react";
import PropTypes from "prop-types";

import CommentSection from "../CommentsSection/CommentsSection";

import "./Post.css";

class Post extends Component {
  render() {
    return (
      <div className="conatiner-post">
        <div className="post-header">
          <img src={this.props.post.thumbnailUrl} alt="" />
          <div className="username">{this.props.post.username}</div>
        </div>
        <img
          className="post-img"
          src={this.props.post.imageUrl}
          alt="post-img"
        />
        <div />
        <CommentSection
          comments={this.props.post.comments}
          post={this.props.post}
          dummyData={this.props.dummyData}
        />
      </div>
    );
  }
}

Post.propTypes = {
  thumbnailUrl: PropTypes.string,
  username: PropTypes.string,
  imageUrl: PropTypes.string
};

export default Post;
