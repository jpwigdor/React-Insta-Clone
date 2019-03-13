import React from 'react';
import CommentsSection from '../CommentsSection/CommentsSection';

const PostsContainer = (props) => {
  return (  
    <div className="container-posts">
      <CommentsSection />
    </div>
  );
}
 
export default PostsContainer;