import * as React from 'react';
import { Product } from './_responses';
export interface IHeaderFooter {
  children: React.ReactNode;
}

export interface ICardWrapper {
  products: Array<Product>;
}

export interface ICard {
  product: Product;
}
