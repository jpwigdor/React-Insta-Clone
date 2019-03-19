import React from "react";

import dummyData from "./dummy-data";

import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import PostsContainer from "./Components/PostsContainer/PostsContainer";

class App extends React.Component {
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

export default App;
