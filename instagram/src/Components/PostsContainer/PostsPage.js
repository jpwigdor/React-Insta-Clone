import React from "react";

import dummyData from "../../dummy-data";

import "../../App.css";
import SearchBar from "../SearchBar/SearchBar";
import PostsContainer from "./PostsContainer";

// Day 2
// TODO: Liking posts - CommentsSection.js
//   This will be set up a lot like the 'Add a comment...' input. Pass a function down to where your heart icon is, and use onClick event handler to increment that post's likes.
//
// TODO: Search - SearchBar.js
//   Set up the search bar will like the comment input and the like button. In your function, filter out any post whose username doesn't match the search term passed in, then update the state with the resulting data.

class PostsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      dummyData: []
    };
  }

  componentDidMount() {
    this.setState({ dummyData: dummyData });
  }

  render() {
    return (
      <div className="app">
        <SearchBar />
        <PostsContainer dummyData={this.state.dummyData} />
      </div>
    );
  }
}

export default PostsPage;
