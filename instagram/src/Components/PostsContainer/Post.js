import React, { Component } from "react";
import CommentSection from "../CommentsSection/CommentsSection";

class Post extends Component {
  render() {
    return (
      <div className="conatiner-post">
        <div className="post-header">
          <img src={this.props.post.thumbnailUrl} alt="" />
        </div>
      </div>
    );
  }
}

export default Post;
