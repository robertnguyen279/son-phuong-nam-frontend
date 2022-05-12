import React from 'react';
import axios from 'services/axios.service';
import { message, Skeleton, Carousel as AntdCarousel } from 'antd';

const Carousel = (): React.ReactElement => {
  const [carousels, setCarousels] = React.useState<Array<any>>();

  React.useEffect(() => {
    axios
      .get('/carousel')
      .then((response) => {
        if (response.data.statusCode === 200) {
          setCarousels(response.data.carousels);
        }
      })
      .catch(() => {
        message.error('Lấy băng chuyền thất bại');
      });
  }, []);

  return (
    <div className="w-full my-5">
      <div className="carousel__container">
        {!carousels ? (
          <Skeleton />
        ) : (
          <div>
            <AntdCarousel autoplay>
              {carousels.map((item, i) => (
                <div key={i}>
                  <img src={item.picture} alt={item.description} />
                </div>
              ))}
            </AntdCarousel>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carousel;
