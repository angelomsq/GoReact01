import React from 'react';

const PostHeader = (props) => {
  const { author, posted_at } = props;

  return (
    <div className="post-header">
      <img src={author.photo} />
      <span className="username">{author.name}</span>
      <span className="description">{posted_at}</span>
    </div>
  );
};

export default PostHeader;
