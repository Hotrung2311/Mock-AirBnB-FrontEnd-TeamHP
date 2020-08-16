import {Role} from "./role";

export interface Account {
  id: number;
  username: string;
  password: string;
  email: string;
  phone: string;
  age: number;
  address: string;
  idNumber: string;
  passport: string;
  role: Role[];

}
