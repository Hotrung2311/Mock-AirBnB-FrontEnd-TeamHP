import {Detail} from "./detail";

export interface Product {
  id: number;
  name: string;
  location: string;
  price: number;
  status: boolean;
  details:Detail;
  accounts: Account;
}
