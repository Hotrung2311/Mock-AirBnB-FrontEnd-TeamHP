import {City} from "@app/_model/city";
import {ImageHouse} from "@app/_model/imageHouse";
import {Account} from './account';

export interface House {
  id?: number;
  address?: string,
  nameHouse?: string;
  bathroom?: number;
  bedroom?: number;
  priceHouse?: number;
  account?: any;
  city?: any;
  voteNumber?: number;
  roomType?: string;
  houseType?: string;
  imageHouses?: any;
  comments?: any;
}
