import {IDetail} from "./idetail";

export interface IProduct {
  id: number;
  name: string;
  location: string;
  price: number;
  status: boolean;
  details:IDetail;
}
