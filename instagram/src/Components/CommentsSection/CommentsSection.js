import React, { Component } from "react";

class CommentsSection extends Component {
  render() {
    return (
      <div className="container-comments-section">
        <div className="container-comments-icons">
          {/* Images here */}
          {/* Images here */}
          {/* Images here */}
        </div>
        <div className="like-count">{this.props.post.likes} Likes</div>
      </div>
    );
  }
}

export default CommentsSection;
