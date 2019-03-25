import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CommentSection from "../CommentsSection/CommentsSection";

import "./Post.css";

const StyledContainerPost = styled.div`
  width: 650px;
  background-color: white;
  margin: 20px 0px;
  border: 1px solid #e5e5e5;
`;

const StyledPostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
`;

const StyledPostHeaderImg = styled.img`
  width: 40px;
  height: 100%;
  border-radius: 50%;
`;

const StyledUsername = styled.div`
  padding-left: 10px;
  font-weight: bold;
`;

const StyledPostImg = styled.img`
  width: 100%;
`;

class Post extends Component {
  render() {
    return (
      <StyledContainerPost>
        <StyledPostHeader>
          <StyledPostHeaderImg src={this.props.post.thumbnailUrl} alt="" />
          <StyledUsername>{this.props.post.username}</StyledUsername>
        </StyledPostHeader>
        <StyledPostImg src={this.props.post.imageUrl} alt="post-img" />
        <div />
        <CommentSection
          comments={this.props.post.comments}
          post={this.props.post}
          dummyData={this.props.dummyData}
        />
      </StyledContainerPost>
    );
  }
}

Post.propTypes = {
  thumbnailUrl: PropTypes.string,
  username: PropTypes.string,
  imageUrl: PropTypes.string
};

export default Post;
