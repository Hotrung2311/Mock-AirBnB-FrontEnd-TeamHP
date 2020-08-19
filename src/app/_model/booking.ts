import { House } from './house';

export interface Booking {
  id?: number;
  startTime?: number;
  endTime?: number;
  account?: any;
  house?: any;
}
