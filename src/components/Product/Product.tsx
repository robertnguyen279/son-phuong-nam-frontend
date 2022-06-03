import React from 'react';
import BreadCrumb from 'components/BreadCrumb';
import ProductImage from 'assets/images/san-pham.jpg';
import { useParams } from 'react-router-dom';
import { Product as IProduct } from 'types';
import axios from 'services/axios.service';
import { message, Skeleton } from 'antd';
import BuyIcon from 'assets/icons/buy.png';
import { Link } from 'react-router-dom';
import Button from 'components/Button';

const Product = (): React.ReactElement => {
  const { urlString } = useParams<{ urlString: string }>();
  const [product, setProduct] = React.useState<IProduct>();

  React.useEffect(() => {
    axios
      .get(`/product/${urlString}`)
      .then((response) => {
        if (response.data.statusCode === 200) {
          setProduct(response.data.product);
        }
      })
      .catch(() => {
        message.error('Lấy thông tin sẩn phẩm thất bại');
      });
  }, []);

  return (
    <div className="product_page">
      <BreadCrumb picture={ProductImage} text="Sản phẩm" />
      <div className="page_container">
        <div className="title">
          {!product ? (
            <Skeleton />
          ) : (
            <div className="product">
              <div className="title text-xl text-center font-bold">{product.name}</div>
              <div className="product_body_wrapper flex md:flex-row flex-col my-5 justify-between">
                <div className="image_container md:mr-5 my-5 md:my-0">
                  <div className="image">
                    <img src={product.picture} alt="product-img" />
                  </div>
                  <div className="sale_tag">Sale !</div>
                </div>
                <div className="info_container">
                  <div className="description">
                    <div className="name pr-1 inline font-bold">Mô tả:</div>
                    <div className="text inline">{product.description}</div>
                  </div>
                  <Link className="buy my-5 flex items-center justify-center cursor-pointer" to="/lien-he">
                    <div className="img w-8 mr-2">
                      <img src={BuyIcon} alt="buy" />
                    </div>
                    <div className="text text-primary">Liên hệ mua ngay</div>
                  </Link>
                </div>
              </div>
              <Link className="back_button my-10" to="/san-pham">
                <Button>Quay lại cửa hàng</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
