import * as React from 'react';
import { Product, Post } from './_responses';
export interface IHeaderFooter {
  children: React.ReactNode;
}

export interface ICardWrapper {
  products: Array<Product>;
}

export interface ICard {
  product: Product;
}

export interface IBlogWrapper {
  posts: Array<Post>;
}

export interface IBlogCard {
  post: Post;
}
