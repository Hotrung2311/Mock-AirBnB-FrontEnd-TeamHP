import {City} from "@app/_model/city";
import {Image} from "@app/_model/image";

export interface House {
  id: number;
  address: string,
  nameHouse: string;
  bathroom: number;
  bedroom: number;
  priceHouse: number;
  account: Account;
  city: City;
  roomType: string;
  houseType: string;
  images?: Image[];
}
