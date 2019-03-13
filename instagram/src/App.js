import React from 'react';

import dummyData from './dummy-data';

import './App.css';
import SearchBar from './Components/SearchBar/SearchBar';
import PostsContainer from './Components/PostsContainer/PostsContainer';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostsContainer />
      </div>
    );
  }
}

export default App;
