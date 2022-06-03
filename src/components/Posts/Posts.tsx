import React from 'react';
import BreadCrumb from 'components/BreadCrumb';
import ProductImage from 'assets/images/san-pham.jpg';
import { Pagination, message, Skeleton } from 'antd';
import axios from 'services/axios.service';
import BlogWrapper from 'components/BlogWrapper';
import { Post } from 'types';

const Posts = (): React.ReactElement => {
  const [currentPagination, setCurrentPagination] = React.useState(1);
  const [posts, setPosts] = React.useState<Array<Post>>();

  const handlePaginationChange = (page: number) => {
    setCurrentPagination(page);
  };

  React.useEffect(() => {
    axios
      .get('/post?limit=9999')
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
    <div className="post">
      <BreadCrumb picture={ProductImage} text="Sản phẩm" />
      <div className="page_container">
        {posts ? (
          <div className="post_wrapper my-10">
            <div className="posts">
              <BlogWrapper posts={posts.slice((currentPagination - 1) * 9, (currentPagination - 1) * 9 + 9)} />
            </div>
            <div className="pagination flex items-center justify-center">
              <Pagination
                defaultCurrent={1}
                total={posts.length}
                defaultPageSize={9}
                onChange={handlePaginationChange}
              />
            </div>
          </div>
        ) : (
          <Skeleton />
        )}
      </div>
    </div>
  );
};

export default Posts;
