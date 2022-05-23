import React from 'react';
import { ICard } from 'types';
import CallIcon from 'assets/icons/phone-call.png';
import { Link } from 'react-router-dom';

const Card = ({ product }: ICard): React.ReactElement => {
  return (
    <Link className="card_wrapper p-5 m-5 cursor-pointer" to={`/san-pham/${product.urlString}`}>
      <div className="top">
        <div className="image">
          <img src={product.picture} alt="product-picture" />
        </div>
        <div className="sale_tag text-white uppercase p-2">Sale!</div>
      </div>
      <hr />
      <div className="bottom">
        <div className="name uppercase py-5">{product.name}</div>
        <div className="price inline">
          Giá:
          <img src={CallIcon} alt="call" className="w-8 inline ml-3" />
        </div>
      </div>
    </Link>
  );
};

export default Card;
