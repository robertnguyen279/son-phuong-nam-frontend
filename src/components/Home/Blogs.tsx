import React from 'react';
import axios from 'services/axios.service';
import { message, Skeleton } from 'antd';
import BlogWrapper from 'components/BlogWrapper';

const Blogs = (): React.ReactElement => {
  const [posts, setPosts] = React.useState();

  React.useEffect(() => {
    axios
      .get('/post?limit=6')
      .then((response) => {
        if (response.data.statusCode === 200) {
          setPosts(response.data.posts);
        }
      })
      .catch(() => {
        message.error('Lấy bài viết thất bại');
      });
  }, []);

  return (
    <div className="mt-10">
      <div className="title text-lg font-bold text-center text-secondary uppercase">Bài viết nổi bật</div>
      {!posts ? <Skeleton /> : <BlogWrapper posts={posts} />}
    </div>
  );
};

export default Blogs;
