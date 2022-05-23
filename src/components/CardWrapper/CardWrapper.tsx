import React from 'react';
import { ICardWrapper } from 'types';
import Card from './Card';

const CardWrapper = ({ products }: ICardWrapper): React.ReactElement => {
  return (
    <div className="flex items-center justify-center flex-wrap">
      {products.map((product) => (
        <Card key={product._id} product={product} />
      ))}
    </div>
  );
};

export default CardWrapper;
