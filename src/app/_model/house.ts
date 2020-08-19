import {City} from "@app/_model/city";
import {Image} from "@app/_model/image";
import {Account} from './account';

export interface House {
  id: number;
  address: string,
  nameHouse: string;
  bathroom: number;
  bedroom: number;
  priceHouse: number;
  account: Account;
  city: City;
  voteNumber?: number;
  roomType: string;
  houseType: string;
  images?: Image[];
  comments?: any;
}
