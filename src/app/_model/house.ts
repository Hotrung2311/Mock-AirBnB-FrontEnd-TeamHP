import {Image} from "./image";
import {City} from "./city";
import {Roomtype} from "./roomtype";
import {Housetype} from "./housetype";

export interface House {

  id?: number,
  address?: string,
  nameHouse?: string,
  bathroom?: number,
  bedroom?: number,
  priceHouse?: number,
  account?: Account,
  city?: City,
  roomTypes: Roomtype[],
  houseTypes: Housetype[],
  images: Image[]
}
