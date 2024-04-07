import { Message } from "./message.type";

export interface Room {
  id?: number;
  name: number;
  messages?: Message[];
}
