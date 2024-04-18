import { Message } from "./message.type";

export interface Room {
  id?: number;
  name: string;
  messages?: Message[];
}
