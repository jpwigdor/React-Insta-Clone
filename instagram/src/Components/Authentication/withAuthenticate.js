import React, { Component } from 'react';

const withAuthenticate = PostsPage => LoginPage => 
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loggedIn = false
      }
    }

    render() {
      if (this.state.loggedIn) return <PostsPage />;
      return <LoginPage />;
    }
  };

  export default withAuthenticate;