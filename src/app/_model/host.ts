import {House} from "./house";

export interface Host {
  id?: number;
  username?: string;
  password?: string;
  email?: string;
  phone?: string;
  houses?: House[];
}
