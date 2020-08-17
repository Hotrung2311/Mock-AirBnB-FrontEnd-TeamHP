import { House } from './house';

export interface Booking {
  id: number;
  startTime: Date;
  stopTime: Date;
  account: Account;
  house: House;
}
