import {Address} from "./address";

export interface City {
  id?:number,
  name?:string,
  address?: Address[]
}
