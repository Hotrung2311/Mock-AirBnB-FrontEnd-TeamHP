import { House } from './house';

export interface Booking {
  id?: number;
  startTime?: number;
  stopTime?: number;
  account?: any;
  house?: any;
}
