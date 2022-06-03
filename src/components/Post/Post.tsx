import React from 'react';
import BreadCrumb from 'components/BreadCrumb';
import PostImage from 'assets/images/bai-viet.jpg';
import { useParams } from 'react-router-dom';
import { Post as IPost } from 'types';
import { Skeleton, message } from 'antd';
import axios from 'services/axios.service';
import ClockIcon from 'assets/icons/clock.svg';
import moment from 'moment';
import ReactHtmlParser from 'react-html-parser';
import BlogWrapper from 'components/BlogWrapper';

const Post = (): React.ReactElement => {
  const { urlString } = useParams<{ urlString: string }>();
  const [post, setPost] = React.useState<IPost>();
  const [relatedPosts, setRelatedPosts] = React.useState<Array<IPost>>();

  React.useEffect(() => {
    axios
      .get(`/post?limit=3`)
      .then((response) => {
        if (response.data.statusCode === 200) {
          setRelatedPosts(response.data.posts);
        }
      })
      .catch(() => {
        message.error('Lấy thông tin bài viết liên quan thất bại');
      });
  }, []);

  React.useEffect(() => {
    axios
      .get(`/post/${urlString}`)
      .then((response) => {
        if (response.data.statusCode === 200) {
          setPost(response.data.post);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        message.error('Lấy thông tin bài viết thất bại');
      });

    window.scrollTo(0, 0);
  }, [urlString]);

  return (
    <div className="post">
      <BreadCrumb picture={PostImage} text="Bài viết" />
      <div className="page_container">
        {!post || !relatedPosts ? (
          <Skeleton />
        ) : (
          <div className="post_wrapper my-10">
            <div className="title font-bold text-xl text-center text-secondary">{post.title}</div>
            <div className="time my-2 inline-flex items-center justify-center">
              <div className="icon w-5">
                <img src={ClockIcon} alt="clock" />
              </div>
              <div className="text pl-2">{moment(post.createdAt).format('DD-MM-YYYY')}</div>
            </div>
            <hr></hr>
            <div className="content py-5">{ReactHtmlParser(post.content)}</div>
            <hr></hr>
            <div className="title font-bold text-xl text-center my-5">Bài viết liên quan</div>
            <BlogWrapper posts={relatedPosts} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
