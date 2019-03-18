import React, { Component } from "react";
import CommentSection from "../CommentsSection/CommentsSection";

import "./Post";

class Post extends Component {
  render() {
    return (
      <div className="conatiner-post">
        <div className="post-header">
          <img src={this.props.post.thumbnailUrl} alt="" />
          <div className="username">{this.props.post.username}</div>
        </div>
        <img src={this.props.post.imageUrl} alt="postImg" />
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

export default Post;
