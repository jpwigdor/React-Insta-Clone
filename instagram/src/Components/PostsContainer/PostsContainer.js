import React from "react";
import styled from "styled-components";

import Post from "./Post";

// import "./PostsContainer.css";

const StyledContainerPosts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 20px 0px;
`;

class PostsContainer extends React.Component {
  render() {
    return (
      <StyledContainerPosts>
        {this.props.dummyData.map(post => {
          return (
            <Post
              key={post.username}
              post={post}
              dummyData={this.props.dummyData}
            />
          );
        })}
      </StyledContainerPosts>
    );
  }
}

export default PostsContainer;
