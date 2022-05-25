import React from 'react';
import { IBlogCard } from 'types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import ClockIcon from 'assets/icons/clock.png';

const BlogCard = ({ post }: IBlogCard): React.ReactElement => {
  return (
    <Link className="blog_card sm:m-5 my-5 p-5" to={`/bai-viet/${post.urlString}`}>
      <div className="top">
        <div className="image overflow-hidden">
          <img src={post.picture} alt="post-img" />
        </div>
        <div className="title my-3 uppercase text-primary">{post.title}</div>
        <div className="createdAt text-sm flex">
          <div className="clock w-5 mb-3">
            <img src={ClockIcon} alt="clock" />
          </div>
          <div className="date ml-2">{moment(post.createdAt).format('DD-MM-YYYY')}</div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
