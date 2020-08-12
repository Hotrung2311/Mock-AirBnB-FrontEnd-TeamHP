import {IProduct} from "./iproduct";

export interface IImage {
  id: number;
  url: string;
  products: IProduct
}
