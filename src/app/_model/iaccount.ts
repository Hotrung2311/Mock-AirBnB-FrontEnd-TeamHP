import {IRole} from "./irole";

export interface IAccount {
  id: number;
  username: string;
  password: string;
  email: string;
  phone: string;
  age: number;
  address: string;
  idNumber: string;
  passport: string;
  role: IRole[];

}
