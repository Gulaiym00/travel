export interface IComResponse {
 success: boolean;
  current_page: number;
  per_page: number;
  total_pages: number;
  total_items: number;
  data: IComments[];
}
export interface ResponseCreate {
  success: boolean;
  current_page: number;
  per_page: number;
  total_pages: number;
  total_items: number;
  data:  Products[] ;
}

export interface IComments {
  userName: string;
  comment: string;
}

export interface State {
  userName: string;
  comment: string;
}
export interface Products {
  title: string;
  description: string;
  types: string;
  image: string;
  link: string;
  price: string;
  details: string;
  duration: string;
  people: string;
  _id: number;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  title: string;
  description: string;
  types: string;
  image: string;
  link: string;
  price: string;
  details: string;
  duration: string;
  people: string;
}

export interface UpdateProduct {
  id: number;
  newProduct: Product;
}
