import {Image} from "./image";
import {City} from "./city";
import {Roomtype} from "./roomtype";
import {Housetype} from "./housetype";
import {Address} from "./address";

export interface House {

  id?: number,
  nameHouse?: string,
  address?: Address,
  city?: City,
  bathroom?: number,
  bedroom?: number,
  priceHouse?: number,
  account?: Account,
  roomTypes?: Roomtype[],
  houseTypes?: Housetype[],
  images?: Image[]
}
