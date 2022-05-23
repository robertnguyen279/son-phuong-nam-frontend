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
