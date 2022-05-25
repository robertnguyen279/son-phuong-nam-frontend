export interface Product {
  _id: string;
  name: string;
  noToneName: string;
  description: string;
  urlString: string;
  picture: string;
  category: {
    _id: string;
    name: string;
  };
}

export interface Post {
  _id: string;
  title: string;
  urlString: string;
  postBy: string;
  picture: string;
  content: string;
  createdAt: string;
}
