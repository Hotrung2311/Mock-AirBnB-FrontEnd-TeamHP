import {Type} from "./type";

export interface Detail {
  id:number;
  room: number;
  bathRoom: number;
  pool: boolean;
  garden: boolean;
  balcony:boolean;
  types: Type;
}
