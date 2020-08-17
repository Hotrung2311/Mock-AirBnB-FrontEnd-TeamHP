import {House} from "./house";

export interface Account {
  id?: number,
  userName?: string,
  passWord?: string,
  phoneNumber?: number,
  email?: string,
  houses?: House[]
}
