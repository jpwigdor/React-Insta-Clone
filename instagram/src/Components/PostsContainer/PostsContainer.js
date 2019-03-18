import React from "react";
import Post from "./Post";

import "./PostsContainer.css";

class PostsContainer extends React.Component {
  render() {
    return (
      <div className="container-posts">
        <div className="container-post">
          {this.props.dummyData.map(post => {
            return (
              <Post
                key={post.username}
                post={post}
                dummyData={this.props.dummyData}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default PostsContainer;
