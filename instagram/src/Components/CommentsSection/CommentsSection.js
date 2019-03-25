import React, { Component } from "react";
import PropTypes from "prop-types";

import Comment from "./Comment";

import heart from "../../assets/like_icon.png";
import heartRed from "../../assets/RedHeart.png";
import "./CommentsSection.css";

class CommentsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: "",
      likes: props.post.likes,
      liked: false
    };
  }

  likedPost = () => {
    this.setState(prevState => ({
      liked: !prevState.liked,
      likes: !prevState.liked ? prevState.likes + 1 : prevState.likes - 1
    }));
  };

  addComment = e => {
    this.setState(
      {
        comment: e.target.value
      },
      () => console.log()
    );
  };

  submitComment = e => {
    e.preventDefault();
    const newComment = { text: this.state.comment, username: "JamesWigdor" };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: "" });
  };

  // TODO: increment Like Counter

  render() {
    return (
      <div className="container-comments-section">
        <div className="container-comments-icons">
          <img
            src={this.state.liked ? heartRed : heart}
            alt="like"
            onClick={this.likedPost}
          />
          {/* Images here */}
          {/* Images here */}
        </div>
        <div className="like-count">{this.state.likes} Likes</div>
        {this.state.comments.map(comment => {
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
            value={this.state.comment}
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
