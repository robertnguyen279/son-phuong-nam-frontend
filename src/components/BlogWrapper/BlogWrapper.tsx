import React from 'react';
import { IBlogWrapper } from 'types';
import BlogCard from './BlogCard';

const BlogWrapper = ({ posts }: IBlogWrapper): React.ReactElement => {
  return (
    <div className="blog_wrapper flex flex-wrap items-center justify-center">
      {posts.map((post) => (
        <BlogCard post={post} key={post._id} />
      ))}
    </div>
  );
};

export default BlogWrapper;
