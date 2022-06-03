import React from 'react';
import BreadCrumb from 'components/BreadCrumb';
import ProductImage from 'assets/images/san-pham.jpg';
import { Select, Pagination, message, Skeleton } from 'antd';
import axios from 'services/axios.service';
import CardWrapper from 'components/CardWrapper';
import { Product } from 'types';

const { Option } = Select;

const Products = (): React.ReactElement => {
  const [categories, setCategories] = React.useState<Array<{ _id: string; name: string }>>();
  const [currentPagination, setCurrentPagination] = React.useState(1);
  const [productLength, setProductLength] = React.useState();
  const [products, setProducts] = React.useState<Array<Product>>();

  const handleSelectChange = (value: string) => {
    if (value === 'all') {
      axios
        .get(`/product/find?limit=9999`)
        .then((response) => {
          if (response.data.statusCode === 200) {
            setProductLength(response.data.products.length);
            setProducts(response.data.products);
          }
        })
        .catch(() => {
          message.error('Lấy thông tin sản phẩm thất bại');
        });
    } else {
      axios
        .get(`/product/find?limit=9999&category=${value}`)
        .then((response) => {
          if (response.data.statusCode === 200) {
            setProductLength(response.data.products.length);
            setProducts(response.data.products);
          }
        })
        .catch(() => {
          message.error('Lấy thông tin sản phẩm thất bại');
        });
    }
  };

  const handlePaginationChange = (page: number) => {
    setCurrentPagination(page);
  };

  React.useEffect(() => {
    axios
      .get('/product/category')
      .then((response) => {
        if (response.data.statusCode === 200) {
          setCategories(response.data.categories);
        }
      })
      .catch(() => {
        message.error('Lấy thông tin danh mục thất bại');
      });

    axios
      .get('/product/find?limit=9999')
      .then((response) => {
        if (response.data.statusCode === 200) {
          setProductLength(response.data.products.length);
          setProducts(response.data.products);
        }
      })
      .catch(() => {
        message.error('Lấy thông tin sản phẩm thất bại');
      });
  }, []);

  return (
    <div className="product">
      <BreadCrumb picture={ProductImage} text="Sản phẩm" />
      <div className="page_container">
        <div className="select">
          <Select defaultValue="all" style={{ width: 300 }} onChange={handleSelectChange}>
            <Option value="all">Tất cả</Option>
            {categories &&
              categories.map((category, i) => (
                <Option value={category._id} key={i}>
                  {category.name}
                </Option>
              ))}
          </Select>
        </div>
        {products ? (
          <div className="product_wrapper my-10">
            <div className="products">
              <CardWrapper products={products.slice((currentPagination - 1) * 9, (currentPagination - 1) * 9 + 9)} />
            </div>
            <div className="pagination flex items-center justify-center">
              <Pagination
                defaultCurrent={1}
                total={productLength}
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

export default Products;
