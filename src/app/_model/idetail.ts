import {IType} from "./itype";

export interface IDetail {
  id:number;
  room: number;
  bathRoom: number;
  pool: boolean;
  garden: boolean;
  balcony:boolean;
  types: IType;
}
