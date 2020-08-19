import {ImageHouse} from "./imageHouse";
import {City} from "./city";
import {Roomtype} from "./roomtype";
import {Housetype} from "./housetype";
// import {Address} from "./address";
import {Account} from "@app/_model/account";

export interface House {
  id?: number,
  address?: string,
  nameHouse?: string,
  bedroom?: number,
  bathroom?: number,
  priceHouse?: number,
  voteNumber?: number,
  houseTypes?: Housetype[],
  roomTypes?: Roomtype[],
  imageHouses?: ImageHouse[],
  account?: Account,
  city?: City

}
