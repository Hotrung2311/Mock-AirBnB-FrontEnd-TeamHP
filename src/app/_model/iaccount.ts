import {IType} from "./itype";

export interface IAccount {
  id:number;
  userName:string;
  password:string;
  email:string;
  phone:string;
  age:string;
  address:string;
  idNumber:string;
  passport:string;


  types: IAccount;
}
