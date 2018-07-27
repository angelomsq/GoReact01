import React from 'react';
import PostHeader from './PostHeader';

const Post = (props) => {
  const { author, posted_at, body } = props.data;

  return (
    <div className="post">
      <PostHeader author={author} posted_at={posted_at} />
      <p>{body}</p>
    </div>
  );
};

export default Post;
