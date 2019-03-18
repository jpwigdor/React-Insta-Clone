import React, { Component } from "react";
import PropTypes from "prop-types";

import Comment from "./Comment";
import "./CommentsSection.css";

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
        {this.props.comments.map(comment => {
          return (
            <Comment
              key={comment.text}
              comment={comment}
              dummyData={this.props.dummyData}
            />
          );
        })}
        <div className="time-stamp">{this.props.post.timestamp}</div>
        <form>
          <input type="text" placeholder="Add a Comment" />
        </form>
      </div>
    );
  }
}

CommentsSection.propTypes = {
  timestamp: PropTypes.string,
  likes: PropTypes.number
};

export default CommentsSection;
