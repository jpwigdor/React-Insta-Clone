import React, { Component } from "react";
import PropTypes from "prop-types";

import Comment from "./Comment";
import "./CommentsSection.css";

class CommentsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ""
    };
  }

  addComment = e => {
    this.setState({ comment: e.target.value });
  };

  submitComment = e => {
    e.preventDefault();
    const newComment = { text: this.state.comment, username: "JamesWigdor" };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: "" });
  };

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
        <form className="comments-form" onSubmit={this.submitComment}>
          <input
            type="text"
            placeholder="Add a Comment..."
            onChange={this.addComment}
            value={this.comment}
          />
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
