import React from 'react';
import axios from 'services/axios.service';
import { message, Skeleton } from 'antd';
import CardWrapper from 'components/CardWrapper';

const Products = (): React.ReactElement => {
  const [products, setProducts] = React.useState();

  React.useEffect(() => {
    axios
      .get('/product/find?limit=6')
      .then((response) => {
        if (response.data.statusCode === 200) {
          setProducts(response.data.products);
        }
      })
      .catch(() => {
        message.error('Lấy thông tin sản phẩm thất bại');
      });
  }, []);

  return (
    <div className="mt-10">
      <div className="title text-lg font-bold text-center text-secondary uppercase">Sản phẩm nổi bật</div>
      {!products ? <Skeleton /> : <CardWrapper products={products} />}
    </div>
  );
};

export default Products;
