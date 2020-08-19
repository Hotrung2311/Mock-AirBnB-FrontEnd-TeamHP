import {Role} from "./role";

export interface Account {
  id: number;
  username?: string;
  password?: string;
  phoneNumber?: string;
  accountAddress?: string;
  email?: string;
  role?: Role[];
  token?: string;
}
