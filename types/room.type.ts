import { Message } from "./message.type";

export interface Room {
  id?: number;
  name: string;
  numberMember: number;
  leader: string;
  messages?: Message[];
}
