import {House} from "./house";

export interface Order {
  id?: number;
  startTime?: Date;
  endTime?: Date;
  totalMoney?: number;
  house?: House;
  // customer?: Customer;
  statusOrders?: string;
}
